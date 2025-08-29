import { type ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import NoteList, { type Note } from './components/NoteList'
import SearchNote from './components/SearchNote'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const [err, setErr] = useState<{message: string} | null>(null)

  async function getNotes(params?: string, controller?: AbortController) {
    setLoading(true)

    let url = '/api/notes'
    if (params) {
      url += `?${new URLSearchParams({ term: params })}`
    }
    const res = await fetch(url, {
      signal: controller?.signal
    })
    if (res.status > 400) {
      setErr(await res.json())
      setLoading(false)
      return
    }
    const data = await res.json()
    setNotes(data)
    setLoading(false)
  }

  useEffect(() => {
    const controller = new AbortController()
    getNotes(undefined, controller).then(r => r)

    // added abort controll every time useEffect runs to avoid page bounce.
    return () => {
      controller.abort('fetch rerunned')
    }
  }, [])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    getNotes(event.target.value).then(r => r)
  }

  const handleAdd = async (note: Note) => {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer SOMEJWTTOKEN',
      },
      body: JSON.stringify(note),
    })
    const data = await res.json()
    setNotes([...notes, data])
  }

  return (
    <main className="container">
      <div>
        <h1>我的笔记本</h1>
        <SearchNote searchTerm={searchTerm} onChange={handleSearch}/>
        {loading ? <div>loading...</div> : <NoteList notes={notes}/>}
        {err && (<div style={{ color: "hsl(10deg, 100%, 70%)" }}>{err.message}</div>)}
        <AddNote onSubmit={handleAdd}/>
      </div>
    </main>
  )
}

export default App
