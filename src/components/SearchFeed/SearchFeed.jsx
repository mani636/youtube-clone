import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import Videos from '../Videos/Videos';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Videos videos={videos} />
    </>
  );
};

export default SearchFeed;
