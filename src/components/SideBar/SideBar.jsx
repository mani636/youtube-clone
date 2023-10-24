import './SideBar.css';
import { links } from '../../utils/constant/data';
import { YoutubeConsumer } from '../../context/youtubeContext';
import { Link } from 'react-router-dom';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const { showHamburger } = YoutubeConsumer();

  const clickHandler = (title) => {
    setSelectedCategory(title);
  };

  return (
    <div className='sidebar'>
      <div className={showHamburger ? 'small-sidebar' : 'shortcut-links'}>
        {links.map(({ id, imgIcon, title }) => (
          <Link key={id} onClick={() => clickHandler(title)}>
            <img src={imgIcon} alt={title} />
            <p>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
