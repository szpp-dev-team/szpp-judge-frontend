/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** szpp-judge-backend のエンドポイントのベース */
  readonly VITE_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
