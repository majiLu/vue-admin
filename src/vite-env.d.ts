/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_ENV: string
  readonly VITE_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
