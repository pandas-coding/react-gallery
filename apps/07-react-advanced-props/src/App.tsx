import { type ChangeEvent, useState } from 'react'
import './App.css'
import UserDataCard from './components/UserDataCard'

function App() {
  const userData = {
    count: 32.95,
    rate: "↑8.98%",
  }

  return (
    <main className="container">
      <UserDataCard
        className="yellowFont"
        pClass="redFont"
        message="hello world"
        userData={userData}
      />

      <Parent/>
    </main>
  )
}

const Parent = () => {
  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value)
  }

  return <Child inputValue={inputValue} onInputChange={handleInputChange}/>
}

const Child = (props: { inputValue: string, onInputChange: (ev: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <main className="container">
      <input
        type="text"
        value={props.inputValue}
        onChange={props.onInputChange}
      />


    </main>

  )
}

export default App
