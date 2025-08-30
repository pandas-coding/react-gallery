import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import ForwardRefVideoPlayer from './components/ForwardRefVideoPlayer'
import { useEffect, useRef, useState } from 'react'
import Sea from '../../assets/videos/sea.mp4'
import Play from './play.svg?react'
import Pause from './pause.svg?react'

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
    setIsPlaying(true);
  }, []);

  function handlePlayClick() {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  }

  return (
    <main className="container">
      <div>
        <VideoPlayer />
      </div>
      <div>
        <ForwardRefVideoPlayer src={Sea} ref={videoRef}/>
        <button onClick={handlePlayClick}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </main>
  );
}

export default App;
