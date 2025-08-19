import { Fragment, useEffect, useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() {
  const tags = ['React', 'Vue', 'JavaScript']

  const heading = (
    <>
      <h1>这是一个用户信息</h1>
      <p>用户信息页面</p>
    </>
  )

  const tagSection = tags.map((tag) => {
    return (
      <Fragment key={tag}>
        <span>{tag}</span>
        <hr/>
      </Fragment>
    )
  })


  return (
    <main className="container">
      {heading}
      <User/>
      {tagSection}
      <br/>
      <ConditionalRendering/>

      <br/>
      <Menu>
        <Menu.Item>主页</Menu.Item>
        <Menu.Item>关于</Menu.Item>
        <Menu.Item>联系</Menu.Item>
      </Menu>
    </main>
  )
}

function User() {
  return (
    <>
      <p>用户名：张三</p>
      <p>职业：前端工程师</p>
    </>
  )
}

function ConditionalRendering() {
  const [user, setUser] = useState<{name: string, occupation: string}>()

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: '张三',
        occupation: '前端工程师',
      })
    }, 3000)
  }, [])

  if (!user) {
    return (<div className="loading">loading...</div>)
  }
  return (
    <main className="container">
      <p>用户名：{user.name}</p>
      <p>职业：{user.occupation}</p>
    </main>
  )
}

export default App
