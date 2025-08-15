import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  //<editor-fold desc="array-state">
  const [list, setList] = useState([1, 2, 3, 4])
  const handleAdd = () => {
    setList([...list, list.length + 1])
  }
  const handlePlusTen = (index: number) => {
    const newList = [...list]
    newList[index] += 10
    setList(newList)
  }
  const handleDelete = (item: number) => {
    setList(list.filter(v => v !== item))
  }
  //</editor-fold>

  const [person, setPerson] = useState({
    name: '张三',
    age: 25,
    nest: {
      a: 1,
    },
  })
  const handleRemoveAge = () => {
    const {age, ...newPerson} = person
    setPerson(newPerson)
  }
  return (
    <div className="container">
      {/* // 3. 自动刷新 */}
      <h1>{count}</h1>
      <button onClick={increase}>增加</button>
      <br/>

      {/*{数组状态}*/}
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handlePlusTen(index)}>+10</button>
            <button onClick={() => handleDelete(item)}>delete item</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>add item</button>
      <br/>

      {/*{对象状态}*/}
      <ul>
        {Object.keys(person).map((key, index) => (
          <li key={index}>
            {key}: {person[key].toString()}
          </li>
        ))}
      </ul>
      <button onClick={handleRemoveAge}>remove age</button>

    </div>
  )
}

export default App
