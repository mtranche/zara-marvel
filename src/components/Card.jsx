import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/marvel.scss';
import useMarvelFavorites from '../hooks/useMarvelFavorites';
import { MarvelContext } from '../contexts/MarvelContext';


const Card = ({ hero,  onCardClick}) => {
  const navigate = useNavigate();
  const { isFavorite, toggleIsFavorite} = useMarvelFavorites(); 
  const [isFav, setIsFav] = useState(false); 
  const { addFavorite, removeFavorite, favorites} = useContext(MarvelContext);  

  const handleAddFavorite = (ev) => {
  setIsFav(!isFav);
  toggleIsFavorite(ev.target.id);
  if(isFav){
    removeFavorite(hero.id);
    ev.target.classList.remove('selected');
  }else{
    addFavorite(hero.id);
    ev.target.classList.add('selected');
  }   
  };
  return (
    <div className="card"id={hero.id}>
      <img src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`} alt={hero.name}  onClick={()=>onCardClick(hero.id)}  />
      <div className="card-desription">
        <h4>{hero.name}</h4>
        <button
          id={hero.id}
          onClick={handleAddFavorite}
          className={favorites && favorites.length>0 && favorites?.indexOf(hero.id)>-1? 'card-favorite selected' : 'card-favorite'}
        >         
        </button>
      </div>
    </div>
  );
};
export default Card;