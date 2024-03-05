import React, { useState } from 'react';
import '../assets/styles/marvel.scss';
import { useFavorites } from '../contexts/FavoritesContext';

const Card = ({ hero,  onCardClick}) => {
  const [isFav, setIsFav] = useState(false); 
  const { addToFavorites, removeFromFavorites } = useFavorites();
 
   const handleAddFavorite = () => {
    setIsFav(!isFav);
    if(isFav){
      removeFromFavorites(hero.id);
    }else{
      addToFavorites(hero.id);
    }   
  };
  
  return (
    <div className="card"id={hero.id}>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name}  onClick={()=>onCardClick(hero.id)}  />
      <div className="card-desription">
        <h4>{hero.name}</h4>
        <button
          id={hero.id}
          onClick={handleAddFavorite}
          className={isFav? 'card-favorite selected' : 'card-favorite'}
        >         
        </button>
      </div>
    </div>
  );
};
export default Card;