import { type ChangeEvent, useReducer, useState } from 'react'
import './App.css'
import NoteList, { type Note } from './components/NoteList'
import NoteCount from './components/NoteCount'

function App() {

  return (
    <>
      <AppLiftingStateUp/>
    </>
  )
}

type AddAction = {
  type: 'add',
  id: number,
  note: string,
}

type DeleteAction = {
  type: 'delete',
  id: number,
}

type NotesAction = AddAction | DeleteAction

function notesReducer(notes: Note[], action: NotesAction) {
  switch (action.type) {
    case 'add': {
      return [
        ...notes,
        {
          id: action.id,
          note: action.note,
        }
      ]
    }
    case 'delete': {
      return notes.filter(note => note.id !== action.id)
    }
    default: {
      throw Error(`no such action: ${action}`)
    }
  }
}

let noteId = 0
function AppLiftingStateUp() {
  // const [notes, setNotes] = useState<{id: number, note: string}[]>([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [note, setNote] = useState('')

  const addNote = () => {
    dispatch({
      type: 'add',
      id: noteId++,
      note,
    })
    // setNotes([
    //   ...notes,
    //   {
    //     id: note.length + 1,
    //     note: note,
    //   }
    // ])
    // setNote('')
  }

  const deleteNoteById = (id: number) => {
    dispatch({
      type: 'delete',
      id,
    })
  }

  const handleNoteInput = (ev: ChangeEvent<HTMLInputElement>) => {
    // react updates state asynchronous, cannot get previous state
    // setNote(ev.target.value)
    console.log('input change: %o', ev.target.value)
    console.log('note state: %o', note)
    // force update state to get the previous state
    setNote((prevNote) => {
      console.log('previous note state: %o', prevNote)
      return ev.target.value
    })
  }

  return (
    <main className="container">
      <NoteList notes={notes} onDelete={deleteNoteById} />
      <input
        value={note}
        onChange={handleNoteInput}
        type="text"
        placeholder="输入笔记内容"
      />
      <button onClick={addNote}>添加笔记</button>
      <NoteCount count={notes.length} />
    </main>
  )
}

export default App

