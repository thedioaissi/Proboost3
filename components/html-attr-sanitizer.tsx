"use client"

import { useEffect } from "react"

/**
 * HtmlAttrSanitizer supprime les attributs injectés par des extensions
 * pour éviter les erreurs d’hydratation.
 */
export function HtmlAttrSanitizer(): null {
  useEffect(() => {
    document.documentElement.removeAttribute("crxlauncher")
  }, [])

  return null
}
