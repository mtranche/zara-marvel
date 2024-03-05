import { React, useEffect, useState } from 'react';
import Search from './Search';
import Gallery from './Gallery'
import '../assets/styles/marvel.scss';


function Main() {
  const [heroes, setHeroes] = useState([]);
  const charactersApi = `${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}${import.meta.env.VITE_MARVEL_API_DEFAULT_PARAMS}`;
 
  useEffect(()=>{
    const getCharacters = async function(){
      try{
        const response = await fetch(charactersApi)
        const data = await response.json();
        setHeroes(data?.data?.results);
      } catch(error){
        console.error('Error:', error)
      }
    };
    getCharacters();
  } ,[]);

  const handleSearch = function(){
    setSearchTerm(term);
  };  

  return (
    <div className='marvel-container'>      
      <Search onSearch={handleSearch} heroes={heroes} setHeroes={setHeroes} />
      <Gallery heroes={heroes} setHeroes={setHeroes} />
    </div>
  )
};

export default Main;