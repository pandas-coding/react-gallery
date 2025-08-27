import "./style.css";

function NoteList({ notes }: NoteListProps) {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h2>{note.title}</h2>
          <article>
            <p>{note.content}</p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default NoteList;

export interface NoteListProps {
  notes: Note[];
}

export interface Note {
  id: number;
  title: string;
  content: string;
}