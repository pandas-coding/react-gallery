import { useEffect, useState } from 'react'

export default function useBreakPoint(windowWidth: number) {
  const initialBreakPoint = breakpoints.find(
    (breakpoint) => windowWidth <= breakpoint.width,
  )

  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    initialBreakPoint?.name || 'unknown',
  )

  useEffect(() => {
    for (const breakpoint of breakpoints) {
      if (windowWidth <= breakpoint.width) {
        setCurrentBreakpoint(breakpoint.name)
        break
      }
    }
  }, [windowWidth])

  return currentBreakpoint
}

const breakpoints = [
  { name: 'mobile', width: 480 },
  { name: 'tablet', width: 768 },
  { name: 'laptop', width: 1024 },
  { name: 'desktop', width: 1440 },
]