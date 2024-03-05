
import React, { useContext } from 'react';
import favoriteUnselected from "../assets/images/favorite_unselected.png";
import { MarvelContext } from "../contexts/MarvelContext.jsx";

const HeroBanner = ({ hero }) => {
  let ctx = useContext(MarvelContext)
  console.log(ctx)

  const handleFavoriteClick = function(){
    const favoriteHeroes = JSON.parse(localStorage.getItem('favoriteHeroes')) || [];
    const favIndex = favoriteHeroes.indexOf(hero);
    console.log(favIndex);
    if(favIndex<0){
        favoriteHeroes.push(hero);        
    }else{
        favoriteHeroes.splice(favIndex,1);
        setIsFavorite(false);   
    }
    if(value.favorites && value.favorites.includes(id)) {
      const updatedFavorites = value.favorites.filter(favId => favId !== id);
      setValue({
        ...value,
        favorites: updatedFavorites
      });
    } else {
      setValue({
        ...value,
        favorites: [...value.favorites, id]
      });
    }
  };
 console.log(MarvelContext)
  return (
    <div className="detail detail--hero-banner">
      {hero?.thumbnail?.path && hero?.thumbnail?.extension?
        <img className="hero-image" src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}  alt={hero?.name} title={hero?.name} />
        :""
      }
      <div className="detail detail--hero-banner__resume">
        <h1>{hero?.name} <img src={favoriteUnselected} className="hero-favorite" width={24} height={21.68} title="Click to add favorite" onClick={handleFavoriteClick} /></h1>
        <p>{hero?.description || 'No description available'}</p>
      </div>
    </div>
  );
};
export default HeroBanner;