import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { YoutubeConsumer } from '../../context/youtubeContext';
import VideoCard from '../VideoCard/VideoCard';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const Feed = () => {
  const { selectedCategory, setVideos } = YoutubeConsumer();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className='feed'>
      <SideBar />
      <VideoCard />
    </div>
  );
};

export default Feed;
