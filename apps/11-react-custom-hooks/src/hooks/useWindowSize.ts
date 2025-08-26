import { useEffect, useState } from 'react'

export interface WindowSize {
  width: number
  height: number
}

export default function useWindowSize(throttleDuration = 100): WindowSize {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    let timeoutId: number | undefined
    const handleResize = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
          timeoutId = undefined
        }, throttleDuration)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearInterval(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [throttleDuration])

  return windowSize
}