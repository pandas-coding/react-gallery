import './style.css'
import type { PostListItemProps } from './types.ts'

export default function PostListItem({ blog, msg = 'hello', children }: PostListItemProps) {
  console.log('msg: %o', msg)
  return (
    <div className="post">
      <img src={blog.author.avatar} alt=""/>
      <div className="postContainer">
        <p className="postContent">{blog.content}</p>
        <div className="postMeta">
          <p className="postAuthor">{blog.author.name}</p>
          <p className="postDate">{blog.publishDate}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}