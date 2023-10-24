import React, { useEffect, useState } from 'react';
import './VideoDetail.css';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import ReactPlayer from 'react-player';
import Loader from '../Loader/Loader';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { PiShareFatThin } from 'react-icons/pi';
import { LiaDownloadSolid } from 'react-icons/lia';
import Videos from '../Videos/Videos';

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

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className='video-containers'>
      <div className='video-box'>
        <ReactPlayer
          url={`https:www.youtube.com/watch?v=${id}`}
          width='100%'
          height='100%'
          playing={true}
          className='video'
          controls
        />

        <div className='content-box'>
          <h4 className='video-title'>{title.slice(0, 60)}</h4>
          <div className='video-content'>
            <div className='video-left-side-content'>
              <img src={thumbnails?.high?.url} alt={title} />

              <div className='content-title'>
                <h3>{channelTitle}</h3>
                <p>
                  984k <span>subscribers</span>
                </p>
              </div>
              <button>Subscribe</button>
            </div>

            <div className='video-right-side-content'>
              <div className='like-container'>
                <button>
                  <FiThumbsUp />
                </button>
                <p>{likeCount}k</p>
                <button>
                  <FiThumbsDown />
                </button>
              </div>

              <div className='like-container'>
                <button>
                  <PiShareFatThin className='icon' />
                  share
                </button>
              </div>

              <div className='like-container'>
                <button>
                  <LiaDownloadSolid className='icon' />
                  download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='right-side-video'>
        {videos &&
          videos.map((item, idx) => (
            <div className='right-side-video-card' key={idx}>
              <div className='video-img-box'>
                <Link to={item ? `/video/${item?.id?.videoId}` : ''}>
                  <img
                    src={item?.snippet?.thumbnails?.high?.url}
                    alt={item?.snippet?.title}
                  />
                </Link>
              </div>

              <div className='video-content-box'>
                <Link to={item ? `/video/${item?.id?.videoId}` : ''}>
                  <p className='Video-title'>{item?.snippet?.title}</p>
                  <p>{item?.snippet?.channelTitle}</p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoDetail;
