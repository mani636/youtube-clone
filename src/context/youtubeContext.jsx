import { createContext, useContext, useState } from 'react';

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [showHamburger, setShowHamburger] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('songs');

  const [videos, setVideos] = useState([]);

  return (
    <YoutubeContext.Provider
      value={{
        showHamburger,
        setShowHamburger,
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

export const YoutubeConsumer = () => {
  return useContext(YoutubeContext);
};
