import './styles.css'

export interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void
}

export interface Note {
  id: number;
  note: string;
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <p key={note.id}>
          {note.note}
          {' '}
          <button onClick={() => onDelete(note.id)} className="deleteBtn">
            删除
          </button>
        </p>
      ))}
    </div>
  )
}