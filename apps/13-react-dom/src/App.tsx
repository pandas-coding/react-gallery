import './App.css'
import VideoPlayer from './components/VideoPlayer'
import ForwardRefVideoPlayer from './components/ForwardRefVideoPlayer'
import { useEffect, useId, useRef, useState } from 'react'
import Sea from './assets/videos/sea.mp4'
import Play from './assets/play.svg?react'
import Pause from './assets/pause.svg?react'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const usernameId = useId()

  useEffect(() => {
    videoRef.current?.play()
    setIsPlaying(true)
  }, [])

  function handlePlayClick() {
    if (isPlaying) {
      videoRef.current?.pause()
      setIsPlaying(false)
    } else {
      videoRef.current?.play()
      setIsPlaying(true)
    }
  }

  return (
    <main className="container">
      <div>
        <VideoPlayer/>
      </div>
      <div>
        <ForwardRefVideoPlayer src={Sea} ref={videoRef}/>
        <button onClick={handlePlayClick}>
          {isPlaying ? <Pause/> : <Play/>}
        </button>
      </div>

      <form>
        <label htmlFor={usernameId + '-username'}>用户名</label>
        <input type="text" id={usernameId + '-username'}/>
      </form>
    </main>
  )
}

export default App
