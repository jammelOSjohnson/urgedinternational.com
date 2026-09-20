/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_SITE_SUSPENDED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
