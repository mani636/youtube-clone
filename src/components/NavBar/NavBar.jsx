import './NavBar.css';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { YoutubeConsumer } from '../../context/youtubeContext';

const NavBar = () => {
  const { showHamburger, setShowHamburger } = YoutubeConsumer();
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img
          src={menu}
          alt='menu-bar'
          className='menu-icon'
          onClick={() => setShowHamburger(!showHamburger)}
        />
        <Link to='/' className='nav-logo'>
          <img src={logo} alt='vidTube-logo' className='logo' />
        </Link>
      </div>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
