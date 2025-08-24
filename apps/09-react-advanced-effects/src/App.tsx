import { type ChangeEvent, useCallback, useEffect, useState } from 'react'
import './App.css'
import AppAvoidRerenderBetweenFetches from './components/AppAvoidRerenderBetweenFetches'

function App() {
  return (
    <AppAvoidRerenderBetweenFetches/>
    // <AppUseEventListenerToAvoidEffect/>
    // <AppUseEffectWithOuterFunction/>
  )
}

export default App

export function AppUseEventListenerToAvoidEffect() {
  const [dateTime, setDateTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  const [city, setCity] = useState('北京')
  const [weather, setWeather] = useState(20)

  function handleCityChange(e: ChangeEvent<HTMLSelectElement>) {
    const newCity = e.target.value
    setCity(newCity)
    setWeather(getWeather(newCity))
  }

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString()}</h1>
      <div>
        <p>
          {city}天气：{weather} 度
        </p>
        <label htmlFor="weather">选择天气：</label>
        <select id="weather" onChange={handleCityChange}>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="重庆">重庆</option>
        </select>
      </div>
    </main>
  )
}

export function AppUseEffectWithOuterFunction() {
  const [dateTime, setDateTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  const [city, setCity] = useState('北京')
  const [weather, setWeather] = useState(20)

  useEffect(() => {
    console.log('running...')
    setWeather(getWeather(city))
  }, [city])

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString()}</h1>
      <div>
        <p>
          {city}天气：{weather} 度
        </p>
        <label htmlFor="weather">选择天气：</label>
        <select id="weather" onChange={(e) => setCity(e.target.value)}>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="重庆">重庆</option>
        </select>
      </div>
    </main>
  )
}

const getWeather = (city: string) => {
  if (city === '北京') return 20
  if (city === '上海') return 25
  if (city === '重庆') return 30
  throw Error('invalid city')
}


export function AppUseCallbackToAvoidRerun() {
  const [dateTime, setDateTime] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  const [city, setCity] = useState('北京')
  const [weather, setWeather] = useState(20)

  // avoid component rerun by using useCallback
  const getWeather = useCallback(() => {
    if (city === '北京') return 20
    if (city === '上海') return 25
    if (city === '重庆') return 30
    throw Error('invalid city')
  }, [city])

  useEffect(() => {
    console.log('running...')
    setWeather(getWeather())
  }, [getWeather])

  return (
    <main className="container">
      <h1>{dateTime.toLocaleString()}</h1>
      <div>
        <p>
          {city}天气：{weather} 度
        </p>
        <label htmlFor="weather">选择天气：</label>
        <select id="weather" onChange={(e) => setCity(e.target.value)}>
          <option value="北京">北京</option>
          <option value="上海">上海</option>
          <option value="重庆">重庆</option>
        </select>
      </div>
    </main>
  )
}

export function AppUseEffectWithSetFunction() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      // 使用函数式方法设置上一次状态的值, 以避免需要外部state的值
      setSeconds((prev) => prev + 1)
    }, 1000)
    console.log('创建了 Id ' + id)

    return () => {
      clearInterval(id)
      console.log('清除了 Id ' + id)
    }
  }, [])

  return (
    <main className="container">
      <h1>{seconds}</h1>
    </main>
  )
}