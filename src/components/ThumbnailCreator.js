import React, { useState, useEffect,useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import FFmpeg from '@ffmpeg/ffmpeg';
import pexels from '../pexels.mp4';
import { createFFmpeg } from '@ffmpeg/ffmpeg';


const ThumbnailCreator = () => {
  const videoRef = React.useRef(null);
  const [thumbnails, setThumbnails] = React.useState([]);


  React.useEffect(() => {
    const videoPlayer = videojs(videoRef.current);

    // load the video file
    videoPlayer.src(pexels);

    // create an instance of FFmpeg
    const ffmpeg = window.FFmpeg;

    const generateThumbnails = async () => {
      // load the video file into memory using fetch
      const response = await fetch(pexels);
      const videoData = await response.arrayBuffer();
      await ffmpeg.load();
      await ffmpeg.write('video.mp4', new Uint8Array(videoData));

      // generate thumbnails using FFmpeg
      await ffmpeg.run('-i', 'video.mp4', '-vf', 'select=not(mod(n\\,100)),scale=-1:120,tile=10x1', '-an', '-vframes', '10', 'output_%03d.jpg');

      // get the generated thumbnails as base64-encoded strings
      const thumbnailUrls = await Promise.all(
        Array.from({ length: 10 }, (_, i) => ffmpeg.read(`output_${(i + 1).toString().padStart(3, '0')}.jpg`))
      );
      const thumbnailDataUrls = thumbnailUrls.map((thumbnail) => `data:image/jpeg;base64,${btoa(thumbnail)}`);

      // set the thumbnails as the source for the filmstrip seek bar
      setThumbnails(thumbnailDataUrls);

      // cleanup
      await ffmpeg.remove('video.mp4');
      await Promise.all(Array.from({ length: 10 }, (_, i) => ffmpeg.remove(`output_${(i + 1).toString().padStart(3, '0')}.jpg`)));
    };

    generateThumbnails();

    return () => {
      // cleanup
      videoPlayer.dispose();
    };
  }, [pexels]);

  return (
    <div className="filmstrip-seek-bar">
      <div className="thumbnails">
        {thumbnails.map((url) => (
          <img key={url} src={url} alt="" />
        ))}
      </div>
      <video ref={videoRef} className="video-js vjs-default-skin" controls>
        <source src={pexels} type="video/mp4" />
      </video>
    </div>
  );
};

export default ThumbnailCreator;
