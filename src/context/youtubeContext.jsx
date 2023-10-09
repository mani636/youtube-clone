import { createContext, useContext, useState } from 'react';

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <YoutubeContext.Provider value={{ showHamburger, setShowHamburger }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export const YoutubeConsumer = () => {
  return useContext(YoutubeContext);
};
