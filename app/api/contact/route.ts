import { NextResponse } from "next/server"
import type { PostgrestError } from "@supabase/supabase-js"

import { createServiceClient } from "@/lib/supabase/admin"

/**
 * Gère la réception d'un message de contact et notifie l'équipe via email.
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const { name, email, subject, message } = payload ?? {}

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 })
    }

    const supabase = createServiceClient()

    const { error: insertError } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      message,
    })

    if (insertError) {
      throw insertError
    }

    const recipient = process.env.SUPABASE_CONTACT_RECIPIENT

    if (!recipient) {
      return NextResponse.json(
        {
          error: "L'adresse email de réception des messages de contact est introuvable (SUPABASE_CONTACT_RECIPIENT).",
        },
        { status: 500 },
      )
    }

    const sender = process.env.SUPABASE_MAIL_SENDER ?? recipient

    const { error: mailError } = await supabase.functions.invoke("send-email", {
      body: {
        from: sender,
        to: recipient,
        subject: `Nouveau message de contact: ${subject}`,
        content: [
          {
            type: "text/plain",
            value: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
          },
          {
            type: "text/html",
            value: `
              <h2>Nouveau message de contact</h2>
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Sujet :</strong> ${subject}</p>
              <p><strong>Message :</strong></p>
              <p>${message.replace(/\n/g, "<br />")}</p>
            `,
          },
        ],
      },
    })

    if (mailError) {
      throw mailError
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = extractErrorMessage(error)
    console.error("[api/contact]", error)
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
