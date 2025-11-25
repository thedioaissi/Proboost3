import { NextResponse } from "next/server"
import type { PostgrestError } from "@supabase/supabase-js"

import { createServiceClient } from "@/lib/supabase/admin"

/**
 * Gère les inscriptions aux formations et notifie l'équipe par email.
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const { formationName, fullName, email, phone, message } = payload ?? {}

    if (!formationName || !fullName || !email || !phone) {
      return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 })
    }

    const supabase = createServiceClient()

    const { error: insertError } = await supabase.from("training_registrations").insert({
      formation_name: formationName,
      full_name: fullName,
      email,
      phone,
      message,
    })

    if (insertError) {
      throw insertError
    }

    const recipient =
      process.env.SUPABASE_TRAINING_REGISTRATION_RECIPIENT ??
      process.env.SUPABASE_CONTACT_RECIPIENT ??
      process.env.SUPABASE_PRODUCT_INQUIRY_RECIPIENT

    if (!recipient) {
      return NextResponse.json(
        {
          error: "Aucun destinataire configuré pour les inscriptions (définir SUPABASE_TRAINING_REGISTRATION_RECIPIENT ou SUPABASE_CONTACT_RECIPIENT).",
        },
        { status: 500 },
      )
    }

    const sender = process.env.SUPABASE_MAIL_SENDER ?? recipient

    try {
      const { error: mailError } = await supabase.functions.invoke("send-email", {
        body: {
          from: sender,
          to: recipient,
          subject: `Nouvelle inscription à la formation ${formationName}`,
          content: [
            {
              type: "text/plain",
              value: `Formation: ${formationName}\nNom: ${fullName}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message ?? "(Aucun message)"}`,
            },
            {
              type: "text/html",
              value: `
                <h2>Nouvelle inscription à une formation</h2>
                <p><strong>Formation :</strong> ${formationName}</p>
                <p><strong>Nom :</strong> ${fullName}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone}</p>
                <p><strong>Message :</strong></p>
                <p>${(message ?? "(Aucun message)").replace(/\n/g, "<br />")}</p>
              `,
            },
          ],
        },
      })

      if (mailError) {
        console.error("[api/training-registration] send-email error", mailError)
      }
    } catch (mailError) {
      console.error("[api/training-registration] send-email invocation failed", mailError)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = extractErrorMessage(error)
    console.error("[api/training-registration]", error)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

function extractErrorMessage(error: unknown) {
  if (!error) return "Erreur inconnue"
  if (typeof error === "string") return error
  if (error instanceof Error) return error.message
  const supabaseError = error as PostgrestError & { message?: string }
  return supabaseError?.message ?? "Erreur Supabase inconnue"
}
