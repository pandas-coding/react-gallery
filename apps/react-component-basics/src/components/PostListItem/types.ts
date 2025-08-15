import type { ReactNode } from 'react'

export interface Blog {
  id: number,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  publishDate: string,
}

export interface PostListItemProps {
  blog: Blog;
  msg: string;
  children: ReactNode;
}