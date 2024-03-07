import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/marvel.scss';
import Card from './Card';
import { MarvelContext } from '../contexts/MarvelContext';

const charactersApi = `${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}${import.meta.env.VITE_MARVEL_API_DEFAULT_PARAMS}`;

function Gallery({ heroes, setHeroes}) {
const { results, setResults } = useContext(MarvelContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleCardClick = function (id) {
    navigate(`/detail/${id}`);
  };

 useEffect(()=>{
    const fetchData = async () => {
      try {
        const url = new URL(charactersApi);
        const response = await fetch(url);
        const data = await response.json();
        const results = data.data.results; 
        setHeroes(results);
        setResults(results);
        setIsLoading(false);
        document.querySelector('.marvel-header').classList.remove('marvel-header__loading');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="marvel-container--gallery">
      {!!isLoading ? (
        <div>Cargando...</div>
      ) : (
        heroes.map(hero => (
          <Card key={hero.id} hero={hero} onCardClick={handleCardClick} />
        ))
      )}
    </div>
  );
};

export default Gallery;
