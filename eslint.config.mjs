import js from "@eslint/js"

export default [
  {
    ignores: ["node_modules", ".next", "pnpm-lock.yaml", "scripts/**"],
  },
  js.configs.recommended,
]
