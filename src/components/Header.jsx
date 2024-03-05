import { React, useState, useEffect, useContext } from 'react';
import marvelLogo from '../assets/images/marvel-logo.png';
import favorite from '../assets/images/favorite.png'
import '../assets/styles/marvel.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { MarvelContext } from '../contexts/MarvelContext';
import { useFavorites } from  '../contexts/FavoritesContext';


function Header() {
  const { numFavorites } = useFavorites();

  const ctx = useContext(MarvelContext);
  const location = useLocation();
  const clsshowfavs = location.pathname.indexOf('detail')>0?'d-none':'';
  const navigate = useNavigate(); 

  const hadleFavoriteClick = function(){
    navigate('/favorites');
  };
  
  const hadleLogoClick = function() {
    navigate('/');
  };
  
  return (
    <header className='marvel-header marvel-header__loading' onClick={hadleLogoClick}>
      <img src={marvelLogo} alt="Marvel logo" aria-label="Marvel logo" className='marvel-header--logo' />
      <a href="/" className={`favorites-wrapper ${clsshowfavs}`} onClick={hadleFavoriteClick} >
        <img src={favorite} alt="Favorites" aria-label="Favorites" />
        <span>{numFavorites}</span>
      </a>
    </header>
  )
};

export default Header;