import { type ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import NoteList, { type Note } from './components/NoteList'
import SearchNote from './components/SearchNote'
import { request, } from './utils/request.ts'
import getAxios from './utils/getAxios.ts'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const [err, setErr] = useState<{message: string} | undefined>(undefined)

  async function getNotes(params?: string, controller?: AbortController) {
    setLoading(true)

    let url = '/api/notes'
    if (params) {
      url += `?${new URLSearchParams({ term: params })}`
    }

    try {
      const res = await getAxios().get(url, {
        signal: controller?.signal,
      });
      setNotes(res.data);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (e.response?.data) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setErr(e.response?.data);
      }
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
