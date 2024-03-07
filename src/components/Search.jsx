import { useState, useEffect, useContext } from 'react';
import '../assets/styles/marvel.scss';
import '../assets/styles/marvel.scss';
import searchIco from '../assets/images/Search.png';
import { MarvelContext } from '../contexts/MarvelContext';

function Search({ heroes, setHeroes}) {
  const [search, setSearch] = useState('');
  const [error, setError] = useState({});
  const [message, setMessage] = useState('')
  const ctx = useContext(MarvelContext)

  useEffect(()=>{},[search]);

 const handleSearchKeyDown =  (evt) => {
  setSearch(search);
    if (evt.key === 'Enter') {
      evt.preventDefault();
      const searchTerm = search.toLowerCase();      
      const hero = heroes.find(hero => hero.name.toLowerCase().includes(searchTerm));     
      if(hero) {
        setMessage("");
        const id = hero.id;      
        const characterApi = `${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}/${id}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}`
        const getCharacter = async function(){
          try{
            const response = await fetch(characterApi)
            const data = await response.json();
            setHeroes(data?.data?.results);
          } 
          catch(error){
          }
        };
        getCharacter();
    } else {
      setHeroes(heroes)
      setMessage(`heroe ${search} is not in the list`);
    }

  }

}
  return (
    <form id='marvel-search' name='marvel-search'>
      <div className='marvel-container--search'>
        <span className='search-ico'>
          <img src={searchIco} />
        </span>
        <input
          type='text' 
          placeholder='Search a character' 
          value={search} 
          onChange={(ev)=>{setSearch(ev.target.value)}} 
          onKeyDown={handleSearchKeyDown}
        />
        <span className='search-results'>{heroes.length} {heroes.length==1? 'result':'results'} </span>
        <p>{message}</p>
      </div> 
     </form>
  )
};

export default Search;