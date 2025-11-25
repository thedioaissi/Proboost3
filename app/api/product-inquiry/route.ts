import { NextResponse } from "next/server"
import type { PostgrestError } from "@supabase/supabase-js"

import { createServiceClient } from "@/lib/supabase/admin"

/**
 * Gère la création d'une demande d'information produit et l'envoi d'un email via Supabase Mail.
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const {
      categoryId,
      productId,
      productName,
      productPrice,
      customerName,
      customerEmail,
      message,
    } = payload ?? {}

    if (!categoryId || !productId || !productName || !customerName || !customerEmail || !message) {
      return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 })
    }

    const supabase = createServiceClient()

    const { error: insertError } = await supabase.from("product_inquiries").insert({
      category_id: categoryId,
      product_id: productId,
      product_name: productName,
      product_price: productPrice,
      customer_name: customerName,
      customer_email: customerEmail,
      message,
    })

    if (insertError) {
      throw insertError
    }

    const recipient = process.env.SUPABASE_PRODUCT_INQUIRY_RECIPIENT

    if (!recipient) {
      return NextResponse.json(
        {
          error: "L'adresse email de réception des demandes produit est introuvable (SUPABASE_PRODUCT_INQUIRY_RECIPIENT).",
        },
        { status: 500 },
      )
    }

    const sender = process.env.SUPABASE_MAIL_SENDER ?? recipient

    const { error: mailError } = await supabase.functions.invoke("send-email", {
      body: {
        from: sender,
        to: recipient,
        subject: `Nouvelle demande de contact pour ${productName}`,
        content: [
          {
            type: "text/plain",
            value: `Produit: ${productName} (${productPrice ?? "Prix non renseigné"})\nCatégorie: ${categoryId}\nClient: ${customerName} (${customerEmail})\n\nMessage:\n${message}`,
          },
          {
            type: "text/html",
            value: `
              <h2>Nouvelle demande de contact produit</h2>
              <p><strong>Produit :</strong> ${productName}</p>
              <p><strong>Prix :</strong> ${productPrice ?? "Prix non renseigné"}</p>
              <p><strong>Catégorie :</strong> ${categoryId}</p>
              <p><strong>Client :</strong> ${customerName} (${customerEmail})</p>
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
    console.error("[api/product-inquiry]", error)
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
