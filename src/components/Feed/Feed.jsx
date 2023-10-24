import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { YoutubeConsumer } from '../../context/youtubeContext';
import VideoCard from '../VideoCard/VideoCard';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Videos from '../Videos/Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className='feed'>
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Videos videos={videos} />
    </div>
  );
};

export default Feed;
