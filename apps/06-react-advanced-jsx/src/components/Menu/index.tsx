import type { ReactNode } from 'react'

function Menu({ children }: { children: ReactNode}) {
  return <nav>{children}</nav>
}

function Item({ children }: { children: ReactNode }) {
  return <a href="#">{children}</a>
}

Menu.Item = Item

export default Menu