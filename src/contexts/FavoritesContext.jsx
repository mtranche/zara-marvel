import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [numFavorites, setNumFavorites] = useState(0);
  const [favoriteIds, setFavoriteIds] = useState([]);
}

  const addToFavorites = (id) => {
    setNumFavorites(numFavorites + 1);{
    setFavoriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteIds((prevIds) => prevIds.filter((itemId) => itemId !== id));
    setNumFavorites(numFavorites - 1);
  };

  return (
    <FavoritesContext.Provider value={{ numFavorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
