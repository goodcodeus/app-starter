/// <reference types="vite/client" />

declare module '*.md';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
