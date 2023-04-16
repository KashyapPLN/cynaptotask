import React, { useState } from 'react';

const VideoThumbnails = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = 'fTj2NO2kZFTkNnrk9FLHz8dpMidvGbtBy3feCBOuorkVrGyRcX3o2AOd';
  const apiURL = `https://api.pexels.com/videos/search?query=mountains&per_page=3&page=1`;

  const fetchVideos = async () => {
    try {
      const response = await fetch(apiURL, {
        headers: {
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      setVideos(data.videos);
    } catch (error) {
      console.error(error);
    }
  };
  fetchVideos();

  const handleThumbnailClick = (videoUrl) => {
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.width = 900;
    iframe.height = 600;
    const newTab = window.open();
    newTab.document.body.appendChild(iframe);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {videos.map((video, index) => (
          <div key={video.id} style={{ position: 'relative', width: '26%', marginTop: '30px',marginLeft:'50px',borderRadius:'8px' }}>
            <img
              src={video.image}
              alt={video.url}
              onClick={() => handleThumbnailClick(video.video_files[0].link)}
              style={{ width: '100%',borderRadius:'8px',height:'250px' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '12px',
              padding: '2px 4px',
            }}>
              {formatTime(video.duration)}
            </div>
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              fontSize: '16px',
              padding: '10px 0',
              textAlign: 'center',
              borderBottomRightRadius:'8px',
              borderBottomLeftRadius:'8px'
            }}>
              Project Name - {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoThumbnails;
