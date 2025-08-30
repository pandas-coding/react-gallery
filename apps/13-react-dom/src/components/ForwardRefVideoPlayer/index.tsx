import { type ForwardedRef, forwardRef } from 'react'
import "./style.css";

export interface ForwardRefVideoPlayerProps {
  src: string;
}

function VideoPlayer({ src }: ForwardRefVideoPlayerProps, ref: ForwardedRef<HTMLVideoElement>) {
  return (
    <div className="videoPlayer">
      <video ref={ref} src={src} width="320" muted></video>
    </div>
  );
}

export default forwardRef(VideoPlayer);
