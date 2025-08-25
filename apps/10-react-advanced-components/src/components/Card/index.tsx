import './style.css'
import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>
}

export default Card
