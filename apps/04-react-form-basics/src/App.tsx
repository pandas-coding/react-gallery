import { useState } from 'react'
import './App.css'
import UserImage1 from './assets/images/user1.png'
import UserImage2 from './assets/images/user2.png'
import UserImage3 from './assets/images/user3.png'
import type {ChangeEvent} from 'react'
import PostListItem from './components/PostListItem'

function App() {
  const [microBlogs, setMicroBlogs] = useState(blogList)

  const [microBlog, setMicroBlog] = useState('')

  const handleUserInput = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    setMicroBlog(ev.target.value)
  }

  const handlePublish = () => {
    const newMicroBlog = {
      id: microBlogs.length + 1,
      author: {
        name: "张小丰",
        avatar: UserImage1,
      },
      content: microBlog,
      publishDate: new Date().toISOString().split("T")[0],
    }
    setMicroBlogs([...microBlogs, newMicroBlog])
  }

  return (
    <main className="container">
      <h1>欢迎使用本应用 🍂</h1>
      <div className="publishBlog">
        <textarea
          onChange={handleUserInput}
          value={microBlog}
          placeholder="写点什么吧..."
          cols={30}
          rows={5}
        ></textarea>
        <button onClick={handlePublish}>发布</button>
      </div>
      <div className="postList">
        {microBlogs.length > 0 ? (
          microBlogs.map((blog) => (
            <PostListItem msg="1" blog={blog} key={blog.id} />
          ))
        ) : (
          <p>暂无微博</p>
        )}
      </div>
    </main>
  )
}

export default App

const blogList = [
  {
    id: 1,
    author: {
      name: '张小丰',
      avatar: UserImage1,
    },
    content:
      '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
    publishDate: '2022-10-25',
  },
  {
    id: 2,
    author: {
      name: '王小玲',
      avatar: UserImage2,
    },
    content:
      '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
    publishDate: '2022-10-25',
  },
  {
    id: 3,
    author: {
      name: '李小明',
      avatar: UserImage3,
    },
    content:
      '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
    publishDate: '2022-10-25',
  },
]