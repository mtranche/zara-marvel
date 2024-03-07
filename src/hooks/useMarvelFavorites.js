import { useState } from 'react';

const FAVORITES_STORAGE_KEY = 'favoriteHeroes';

function checkIsHeroFavorite(heroId){
    const favoriteHeroes = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [];
    return favoriteHeroes.includes(heroId);
  }
  

const useMarvelFavorites = (heroId) => {
    const [isFavorite, setIsFavorite] = useState(checkIsHeroFavorite(heroId));
    const toggleIsFavorite = function(heroId){
        const favoriteHeroes = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [];
        const favIndex = favoriteHeroes.indexOf(heroId);
        
        if(favIndex<0){
            favoriteHeroes.push(heroId);
            setIsFavorite(true);
        }else{
            favoriteHeroes.splice(favIndex,1);
            setIsFavorite(false);
        }
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteHeroes));
    
      }
    return {
      isFavorite,
      toggleIsFavorite,
    };
};

export default useMarvelFavorites;