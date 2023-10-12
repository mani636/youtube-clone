import './VideoCard.css';
import { Link } from 'react-router-dom';
import { YoutubeConsumer } from '../../context/youtubeContext';

const VideoCard = () => {
  const { showHamburger, videos } = YoutubeConsumer();

  console.log(videos);

  return (
    <div className={showHamburger ? 'large-container' : 'list-container'}>
      {videos.map((item, index) => {
        return (
          <div className='vid-list' key={index}>
            <Link to={item ? `/video/${item?.id?.videoId}` : ''}>
              <img
                src={item?.snippet?.thumbnails?.high?.url}
                alt={item?.snippet?.title}
                className='thumbnail'
              />
            </Link>

            <div className='flex-div'>
              <img
                src={item?.snippet?.thumbnails?.high?.url}
                alt={item?.snippet?.title}
              />
              <div className='vid-info'>
                <Link>{item?.snippet?.title}</Link>
                <p>{item?.snippet?.channelTitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;
