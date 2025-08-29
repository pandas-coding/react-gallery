import { type ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import NoteList, { type Note } from './components/NoteList'
import SearchNote from './components/SearchNote'
import { request, type RequestError } from './utils/request.ts'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const [err, setErr] = useState<{message: string} | undefined>(undefined)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function getNotes(params?: string, _controller?: AbortController) {
    setLoading(true)

    let url = '/api/notes'
    if (params) {
      url += `?${new URLSearchParams({ term: params })}`
    }

    try {
      const data = await request(url);
      setNotes(data);
    } catch (e: unknown) {
      setErr((e as RequestError)!.error);
    } finally {
      setLoading(false);
    }
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
    const data = await request("/api/notes", "POST", note);
    setNotes([...notes, data]);
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
