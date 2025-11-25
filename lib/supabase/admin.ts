import { createClient } from "@supabase/supabase-js"

/**
 * Crée un client Supabase côté serveur avec la clé service role.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url) {
    throw new Error("La variable NEXT_PUBLIC_SUPABASE_URL est manquante.")
  }

  if (!serviceRoleKey) {
    throw new Error("La variable SUPABASE_SERVICE_ROLE_KEY est manquante.")
  }

  return createClient(url, serviceRoleKey)
}
