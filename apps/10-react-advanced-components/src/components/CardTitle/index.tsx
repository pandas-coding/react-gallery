import type { ReactNode } from 'react'

export interface CardTitleProps {
  underline: boolean;
  children: ReactNode;
}

function CardTitle({ underline = false, children }: CardTitleProps) {
  return (
    <h2 style={{ borderBottom: underline ? "1px solid" : "none" }}>
      {children}
    </h2>
  );
}

export default CardTitle;
