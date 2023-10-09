import './VideoCard.css';
import thumbnail from '../../assets/thumbnail1.png';
import jack from '../../assets/Jack.png';

const VideoCard = () => {
  return (
    <div className='list-container'>
      <div className='vid-list'>
        <a href=''>
          <img src={thumbnail} alt='thumbnail-img' className='thumbnail' />
        </a>
        <div className='flex-div'>
          <img src={jack} alt='jack-img' />
          <div className='vid-info'>
            <a href=''>
              Best channel to learn coding that help you to be a web developer
            </a>
            <p>Easy Tutorials</p>
            <p>15k Views 2 days</p>
          </div>
        </div>
      </div>

      <div className='vid-list'>
        <a href=''>
          <img src={thumbnail} alt='thumbnail-img' className='thumbnail' />
        </a>
        <div className='flex-div'>
          <img src={jack} alt='jack-img' />
          <div className='vid-info'>
            <a href=''>
              Best channel to learn coding that help you to be a web developer
            </a>
            <p>Easy Tutorials</p>
            <p>15k Views 2 days</p>
          </div>
        </div>
      </div>

      <div className='vid-list'>
        <a href=''>
          <img src={thumbnail} alt='thumbnail-img' className='thumbnail' />
        </a>
        <div className='flex-div'>
          <img src={jack} alt='jack-img' />
          <div className='vid-info'>
            <a href=''>
              Best channel to learn coding that help you to be a web developer
            </a>
            <p>Easy Tutorials</p>
            <p>15k Views 2 days</p>
          </div>
        </div>
      </div>

      <div className='vid-list'>
        <a href=''>
          <img src={thumbnail} alt='thumbnail-img' className='thumbnail' />
        </a>
        <div className='flex-div'>
          <img src={jack} alt='jack-img' />
          <div className='vid-info'>
            <a href=''>
              Best channel to learn coding that help you to be a web developer
            </a>
            <p>Easy Tutorials</p>
            <p>15k Views 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
