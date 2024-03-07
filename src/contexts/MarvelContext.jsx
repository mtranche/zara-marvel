
import React, { createContext, useState, useEffect } from 'react';
export const MarvelContext = createContext();

export const MarvelProvider  = ({ children }) => {
  const [numFavs, setNumFavs] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [results, setResults] = useState([]);

  const addFavorite = (favoriteId) => {
    setNumFavs(numFavs + 1);
    setFavorites([...favorites, favoriteId]);
  };

  const removeFavorite = (favoriteId) => {
    setNumFavs(numFavs - 1);
    setFavorites(favorites.filter((id) => id !== favoriteId));
  };

  return (
    <MarvelContext.Provider value={{ numFavs, favorites, addFavorite, removeFavorite, setFavorites, setNumFavs, setResults, results }}>
      {children}
    </MarvelContext.Provider>
  );
};
