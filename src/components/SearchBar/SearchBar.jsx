import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/search.png';
import './SearchBar.css';
import { YoutubeConsumer } from '../../context/youtubeContext';

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
      <form className='search-box' onSubmit={onHandleSubmit}>
        <input
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={search} alt='search-img' />
      </form>
    </div>
  );
};

export default SearchBar;
