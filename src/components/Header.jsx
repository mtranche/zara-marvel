import { React, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../assets/styles/marvel.scss';
import marvelLogo from '../assets/images/marvel-logo.png';
import favorite from '../assets/images/favorite.png';
import { MarvelContext } from '../contexts/MarvelContext';


function Header() {
  const { numFavs, favorites, results, setResults } = useContext(MarvelContext);
  const location = useLocation();
  const clsshowfavs = location.pathname.indexOf('detail')>0?'d-none':'';
  const navigate = useNavigate(); 
  let favoriteHeroes;

  const handleFavoriteClick = function(ev){
    favoriteHeroes = results.filter(hero => favorites.includes(hero.id));
    if(favoriteHeroes.length){
      setResults(favoriteHeroes);    
    } else {
      setResults(results);
    }
    navigate('/favorites')
  };
  const handleLogoClick = function() {
    navigate('/');
  };
  
  return (
    <div className='header-container'>
      <header className='marvel-header marvel-header__loading' onClick={handleLogoClick}>
        <img src={marvelLogo} alt="Marvel logo" aria-label="Marvel logo" className='marvel-header--logo' />        
      </header>
      <div className={`favorites-wrapper ${clsshowfavs}`} onClick={handleFavoriteClick}>
        <img src={favorite} alt="Favorites" aria-label="Favorites" />
        <span>{numFavs}</span>
      </div>
    </div>
  );
};

export default Header;