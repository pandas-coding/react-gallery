import { Suspense, lazy, useState } from 'react'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const About = lazy(() => delay(3000).then(() => import('../About')))

function AppAsyncComponent() {
  const [showAbout, setShowAbout] = useState(false)

  const handleButtonClick = () => {
    setShowAbout(!showAbout)
  }

  return (
    <div>
      <h1>组件懒加载</h1>
      <button onClick={handleButtonClick}>
        {showAbout ? '隐藏关于' : '显示关于'}
      </button>
      {showAbout && (
        <Suspense fallback={<div>...loading</div>}>
          <About/>
        </Suspense>
      )}
    </div>
  )
}

export default AppAsyncComponent