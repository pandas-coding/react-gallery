import { useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import SearchNote from './components/SearchNote'

function App() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  async function getNotes() {
    setLoading(true)
    const res = await fetch('http://localhost:8080/notes')
    const data = await res.json()
    setNotes(data)
    setLoading(false)
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <main className="container">
      <div>
        <h1>我的笔记本</h1>
        <SearchNote/>
        {loading ? <div>loading...</div> : <NoteList notes={notes}/>}
        <AddNote/>
      </div>
    </main>
  )
}

export default App
