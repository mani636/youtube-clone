import './VideoCard.css';
import { Link } from 'react-router-dom';
import { YoutubeConsumer } from '../../context/youtubeContext';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Link
        to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
        class='thumbnail'
      >
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          className='thumbnail'
        />

        <div className='details'>
          <h2 className='title'>{snippet?.title.slice(0, 60)}</h2>

          <p class='description'>{snippet?.channelTitle}</p>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
