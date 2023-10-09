import './NavBar.css';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import Jack from '../../assets/Jack.png';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src={menu} alt='menu-bar' className='menu-icon' />
        <Link to='/' className='nav-logo'>
          <img src={logo} alt='vidTube-logo' className='logo' />
        </Link>
      </div>

      <SearchBar />

      <div className='navbar-right'>
        <img src={upload} alt='upload' />
        <img src={more} alt='more' />
        <img src={notification} alt='notification' />
        <img src={Jack} alt='Jack' className='user-icon' />
      </div>
    </nav>
  );
};

export default NavBar;
