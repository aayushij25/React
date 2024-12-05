import { useRef } from 'react';
import videoURL from '../assets/monkey.mp4';

function Video() {
  const videoRef = useRef(null);
  
  function playVideo() {
    videoRef.current.play();
  }

  function stopVideo() {
    videoRef.current.pause();
  }
  return (
    <>
      <video 
      ref={videoRef} 
      src={videoURL} 
      onMouseEnter={playVideo} 
      onMouseLeave={stopVideo}>
      </video>
    </>
  );
}

export default Video;