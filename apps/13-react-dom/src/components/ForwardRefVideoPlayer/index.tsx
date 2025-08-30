import { type ForwardedRef, forwardRef } from 'react'
// import {useImperativeHandle} from 'react'
import './style.css'

export interface ForwardRefVideoPlayerProps {
  src: string;
}

function VideoPlayer({ src }: ForwardRefVideoPlayerProps, ref: ForwardedRef<HTMLVideoElement>) {

  // const _videoRef = useRef<HTMLVideoElement>(null)

  // useImperativeHandle(ref, () => ({
  //   play() {
  //     videoRef.current?.play()
  //   },
  //   pause() {
  //     videoRef.current?.pause()
  //   },
  // }))

  return (
    <div className="videoPlayer">
      <video ref={ref} src={src} width="320" muted></video>
    </div>
  )
}

export default forwardRef(VideoPlayer)
