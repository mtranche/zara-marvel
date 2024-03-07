import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { MarvelContext } from "../contexts/MarvelContext";
import Search from "./Search";
import Card from "./Card";

function Favorites(){
  const { favorites, results, setResults } = useContext(MarvelContext);
  const navigate = useNavigate();
  const favoritesResults = results.filter(result => favorites.includes(result.id)); 

  const handleCardClick = function (id) {
    navigate(`/detail/${id}`);
  };
  
  return(
    <div className="favorites-container"> 
      <h2>Favorites</h2>     
      <Search heroes={favoritesResults} setHeroes={setResults}  />
      <div className="marvel-container--gallery">
        {favoritesResults.map(hero => (<Card key={hero.id} hero={hero} onCardClick={()=>handleCardClick(hero.id)} />))}
      </div>
    </div>
  );
}
export default Favorites;