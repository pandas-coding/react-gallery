import { useEffect, useState } from 'react'

export default function AppAvoidRerenderBetweenFetches() {
  const [id, setId] = useState(1)
  return (
    <main className="container">
      <div>
        <PostItem id={id}/>
        <div>
          <button onClick={() => setId(1)}>1</button>
          {' '}
          <button onClick={() => setId(2)}>2</button>
          {' '}
          <button onClick={() => setId(3)}>3</button>
        </div>
      </div>
    </main>
  )
}

interface PostItemProps {
  id: number
}

function PostItem({ id }: PostItemProps) {
  const [postItem, setPostItem] = useState<{title?: string, content?: string}>({})

  useEffect(() => {
    let cancelled = false
    setTimeout(() => {
      if (!cancelled) {
        setPostItem(data[id - 1])
      }
    }, 3000)

    // using useEffect callback return to clean up before last effect run
    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <div>
      <h2>{postItem.title}</h2>
      <p>{postItem.content}</p>
    </div>
  )
}

const data = [
  {
    id: 1,
    title: '学习 React',
    content: '这是一篇关于学习 React 的文章',
  },
  {
    id: 2,
    title: '学习 Hook',
    content: '这是一篇关于学习 Hook 的文章',
  },
  {
    id: 3,
    title: '学习 Redux',
    content: '这是一篇关于学习 Redux 的文章',
  },
]