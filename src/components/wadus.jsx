import React, { useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../assets/styles/marvel.scss';
import marvelLogo from '../assets/images/marvel-logo.png';
import favorite from '../assets/images/favorite.png';
import { MarvelContext } from '../contexts/MarvelContext';

function Header() {
  const { numFavs } = useContext(MarvelContext);
  const location = useLocation();
  const navigate = useNavigate();
  const clsshowfavs = location.pathname.indexOf('detail') > 0 ? 'd-none' : '';



  const handleFavoriteClick = () => {
    navigate('/favorites');
  };


  const handleLogoClick = () => {
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
