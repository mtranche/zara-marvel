import Header from '../components/Header'
import Main from '../components/Main';
import { MarvelContext } from '../contexts/MarvelContext';
import { FavoritesProvider } from '../contexts/FavoritesContext';

function Home(){  
  let numFavs = document.querySelectorAll('.card-favorite.selected').length;
  return(
    <>
    <MarvelContext.Provider value={{numFavs:numFavs}}>
      <FavoritesProvider>
        <Header />
        <Main />
        </FavoritesProvider>
    </MarvelContext.Provider>
    </>
  );
};
export default Home;