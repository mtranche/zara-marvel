import { useEffect, useContext } from 'react';
import { MarvelContext } from '../contexts/MarvelContext';
import Header from '../components/Header'
import Main from '../components/Main';

function Home(){  
  const { favorites, setFavorites, setNumFavs, setResults, results} = useContext(MarvelContext);  

  useEffect(() => {
  if (favorites && favorites.length && favorites.length===0 && JSON.parse(localStorage.getItem('favoriteHeroes')).length !== 0) {
    const lsfavorites = JSON.parse(localStorage.getItem('favoriteHeroes')).map(Number);
    setFavorites(lsfavorites);
    setNumFavs(lsfavorites.length);
  }
}, []); 

  return(
    <>
      <Header />
      <Main />
    </>
  );
};
export default Home;