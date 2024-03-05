import React, { createContext, useState } from 'react';

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [value, setValue] = useState({
    favorites: []
  });

  return (
    <MarvelContext.Provider value={{ value, setValue }}>
      {children}
    </MarvelContext.Provider>
  );
};

export { MarvelContext, MarvelProvider };
