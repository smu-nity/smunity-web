/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERSION: string
  readonly VITE_COMMIT_HASH: string
  readonly VITE_YEAR: string
  readonly VITE_GA_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
