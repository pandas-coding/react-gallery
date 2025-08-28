import './style.css'
import { type FormEventHandler, useState } from 'react'
import type { Note } from '../NoteList'

export interface AddNoteProps {
  onSubmit: ({ title, content }: Note) => void
}

function AddNote({ onSubmit }: AddNoteProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault()
    onSubmit({title, content} as Note)
    setTitle('')
    setContent('')
  }

  return (
    <div className="addNote">
      <h2>添加新笔记</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="请输入笔记标题"/>
        <textarea rows={6} placeholder="请输入笔记内容"></textarea>
        <button type="submit">添加笔记</button>
      </form>
    </div>
  )
}

export default AddNote
