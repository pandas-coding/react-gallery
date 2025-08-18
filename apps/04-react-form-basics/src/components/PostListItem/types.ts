export interface PostListItemProps {
  blog: Blog;
  msg: string;
}

export interface Blog {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  publishDate: string;
}