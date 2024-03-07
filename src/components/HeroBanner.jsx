
import React, { useContext } from 'react';
import favoriteUnselected from "../assets/images/favorite_unselected.png";
import favorite from "../assets/images/favorite.png";
import { MarvelContext } from "../contexts/MarvelContext.jsx";

const HeroBanner = ({ hero }) => {
  let ctx = useContext(MarvelContext);
  
  const handleFavoriteClick = function(ev){
    const favoriteHeroes = ctx.favorits || [];
    const favIndex = favoriteHeroes.indexOf(hero);
    if(favIndex<0){
        favoriteHeroes.push(hero);        
        ev.target.src = favorite;
    }else{
        favoriteHeroes.splice(favIndex,1);
        setIsFavorite(false);        
        ev.target.src = favoriteUnselected;  
    }
    if(ctx.favorites && ctx.favorites.lengt>0 && ctx.favorites.includes(hero.id)) {
      const updatedFavorites = ctx.favorites.filter(favId => favId !== hero.id);
      ctx.setFavorites({
        ...ctx,
        favorites: updatedFavorites
      });
    } else {
      ctx.setFavorites({
        ...ctx,
        favorites: [...ctx.favorites, hero.id]
      });
    }
  };
  
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