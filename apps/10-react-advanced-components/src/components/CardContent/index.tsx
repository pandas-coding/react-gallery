import type { ReactNode } from 'react'

export interface CardContentProps {
  children: ReactNode
}

function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}

export default CardContent;
