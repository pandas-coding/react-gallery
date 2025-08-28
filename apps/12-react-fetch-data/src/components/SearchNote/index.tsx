import './style.css'
import type { ChangeEvent } from 'react'

export interface SearchNoteProps {
  searchTerm: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

function SearchNote({ searchTerm, onChange }: SearchNoteProps) {
  return (
    <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder="搜索笔记"
      />
    </div>
  )
}

export default SearchNote
