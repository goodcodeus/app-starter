/// <reference types="vite/client" />

declare module '*.md';

declare module '*.svg' {
  import type React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.svg?react' {
  import type React from 'react';

  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}
