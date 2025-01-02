/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly VITE_AWS_ACCESS_KEY_ID: string;
    readonly VITE_AWS_SECRET_ACCESS_KEY: string;
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}