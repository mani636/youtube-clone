import React, { useEffect, useState } from 'react';
import './VideoDetail.css';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  console.log('videoDetail--20', videoDetail);

  return (
    <div className='video-container'>
      <div className='video-box'>
        <ReactPlayer
          url={`https:www.youtube.com/watch?v=${id}`}
          width='100%'
          height='100%'
          playing={true}
          className='video'
          controls
        />
      </div>
    </div>
  );
};

export default VideoDetail;
