/// <reference types="vite/client" />

/// <reference types="react-scripts" />

declare module "*.svg?react" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}