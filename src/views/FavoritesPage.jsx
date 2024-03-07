import Header from "../components/Header";
import Favorites from "../components/Favorites";

function FavoritesPage(){  
  return(    
    <>
      <Header />
      <div className="marvel-container">
        <Favorites />
      </div>
    </>
  )
};
export default FavoritesPage;