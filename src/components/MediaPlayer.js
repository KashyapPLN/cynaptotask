import React, { useState } from 'react';
import {BsFillRewindCircleFill,BsFillPlayCircleFill,BsPauseCircleFill,BsFillFastForwardCircleFill} from 'react-icons/bs'


function MediaPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  const handleRewindClick = () => {
    setCurrentTime(currentTime - 10);
  };

  const handleForwardClick = () => {
    setCurrentTime(currentTime + 10);
  };

  const handleSeekBarChange = (event) => {
    setCurrentTime(event.target.value);
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setDuration(event.target.duration);
  };
  const timeLeft = duration - currentTime;
  return (
    <div style={{textAlign:'center'}}>
      <button className='rewind' onClick={handleRewindClick}><BsFillRewindCircleFill/></button>
      {isPlaying ? (
        <button className='pause'onClick={handlePauseClick}><BsPauseCircleFill/></button>
      ) : (
        <button className='play' onClick={handlePlayClick}><BsFillPlayCircleFill/></button>
      )}
      <button className='forward'onClick={handleForwardClick}><BsFillFastForwardCircleFill/></button>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeekBarChange}
        onTimeUpdate={handleTimeUpdate}
        className='seekBar'
      />
      <span style={{marginRight:'16px',marginLeft:'16px',fontWeight:500}}>{formatTime(currentTime)}</span>
      <span>/</span>
        <span style={{marginLeft:'16px',fontWeight:500}}>{formatTime(timeLeft)}</span>
    </div>
  );
}

export default MediaPlayer;
