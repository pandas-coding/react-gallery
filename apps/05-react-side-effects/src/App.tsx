import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState(new Date())
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date())
    }, 1000)
    console.log(id)
    return () => {
      clearInterval(id)
      console.log('cleared internal id=%o', id)
    }
  }, [])

  useEffect(() => {
    setDateTime(new Date())
  }, [refresh])

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
      <button onClick={() => setRefresh(refresh + 1)}>Refresh</button>
      <br/>

      <AsyncApp/>
    </main>

  )
}

export default App


function AsyncApp() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    updateTime()
  }, [])

  async function updateTime() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    setDateTime(new Date())
  }

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString("zh-CN")}</h1>
    </main>
  )
}