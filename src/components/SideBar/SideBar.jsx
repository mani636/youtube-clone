import './SideBar.css';
import { links, subscribedList } from '../../utils/constant/data';
import { YoutubeConsumer } from '../../context/youtubeContext';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const { showHamburger, setSelectedCategory } = YoutubeConsumer();
  return (
    <div className='sidebar'>
      <div className={showHamburger ? 'small-sidebar' : 'shortcut-links'}>
        {links.map(({ id, img, title }) => (
          <Link key={id} onClick={() => setSelectedCategory({ title })}>
            <img src={img} alt={title} />
            <p>{title}</p>
          </Link>
        ))}
        <hr />
      </div>

      <div className={showHamburger ? 'small-sidebar' : 'subscribed-list'}>
        <h3>SUBSCRIBED</h3>
        {subscribedList.map(({ id, title, img }) => (
          <Link key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
