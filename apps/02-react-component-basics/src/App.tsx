import './App.css'
import UserImage1 from './assets/images/user1.png'
import UserImage2 from './assets/images/user2.png'
import UserImage3 from './assets/images/user3.png'
import PostListItem from './components/PostListItem'
import type {MouseEvent} from 'react'

export default function App() {
  const microBlogs = [...blogList]
  return (
    <main className="container">
      <h1>欢迎使用本应用 🍂</h1>
      <div className="publishBlog">
        <textarea placeholder="写点什么吧..." cols={30} rows={5}></textarea>
        <button>发布</button>
      </div>
      <div className="postList">
        {microBlogs.length > 0 ? (
          microBlogs.map((blog) => (
            <PostListItem msg="1" blog={blog} key={blog.id}>
              <EditAndDelete onEdit={(ev) => console.log('clicked blog id: %o, %o', blog.id, ev)} />
            </PostListItem>
          ))
        ) : (
          <p>暂无微博</p>
        )}
      </div>
    </main>
  )
}

/**
 * 通过自定义事件处理函数, 可以实现子组件向父组件传递参数
 * @param onEdit
 * @constructor
 */
function EditAndDelete({onEdit}: {onEdit?: (ev: MouseEvent) => void}) {
  const handleEdit = (ev: MouseEvent) => {
    ev.preventDefault()
    console.log('stopped link')
    if (onEdit) onEdit(ev)
  }

  return (
    <p>
      <a href="#" onClick={handleEdit}>编辑</a> <a href="#">删除</a>
    </p>
  )
}

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
