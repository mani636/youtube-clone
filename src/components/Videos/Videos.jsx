import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import Loader from '../Loader/Loader';
import { YoutubeConsumer } from '../../context/youtubeContext';
import './Videos.css';

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;
  const { showHamburger } = YoutubeConsumer();

  return (
    <div
      className={showHamburger ? 'wide-videos-container' : 'videos-container'}
    >
      {videos.map((item, idx) => (
        <div key={idx} className={showHamburger ? 'small-card' : 'card'}>
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
