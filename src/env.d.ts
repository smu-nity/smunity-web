/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VERSION: string
  readonly VITE_COMMIT_HASH: string
  readonly VITE_YEAR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
