import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/search.png';
import voice from '../../assets/voice-search.png';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <div className='search-container'>
      <div onSubmit={onHandleSubmit} className='search-box'>
        <input
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={search} alt='search-img' />
      </div>
      <img src={voice} alt='voice-search-img' className='mic-icon' />
    </div>
  );
};

export default SearchBar;
