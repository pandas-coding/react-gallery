
export interface NoteCountProps {
  count: number;
}

export default function NoteCount({count}: NoteCountProps) {
  return <div>总计：{count} 条</div>;
}