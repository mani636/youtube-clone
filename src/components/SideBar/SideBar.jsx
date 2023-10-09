import './SideBar.css';
import { links, subscribedList } from '../../utils/constant/data';
import { YoutubeConsumer } from '../../context/youtubeContext';

const SideBar = () => {
  const { showHamburger } = YoutubeConsumer();
  return (
    <div className='sidebar'>
      <div className={showHamburger ? 'small-sidebar' : 'shortcut-links'}>
        {links.map(({ id, img, title }) => (
          <a href='' key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
          </a>
        ))}
        <hr />
      </div>

      <div className={showHamburger ? 'small-sidebar' : 'subscribed-list'}>
        <h3>SUBSCRIBED</h3>
        {subscribedList.map(({ id, title, img }) => (
          <a href='' key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
