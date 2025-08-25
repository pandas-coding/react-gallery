import Card from '../Card'
import CardTitle from '../CardTitle'
import CardContent from '../CardContent'
import './styles.css'

export default function AppChildren() {
  return (
    <main className="container">
      <div>
        <Card>
          <CardTitle underline>卡片标题</CardTitle>
          <CardContent>卡片内容</CardContent>
        </Card>
      </div>
    </main>
  )
}