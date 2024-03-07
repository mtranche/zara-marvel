import React, { useState, useEffect } from 'react';
import '../assets/styles/marvel.scss';
import HeroBanner from './HeroBanner';
import Comics from './Comics';

const Detail = (id) => {  
  const heroId = id.id.characterId;
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const characterApi = `${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}/${heroId}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}`
        const url = new URL(characterApi);
        const response = await fetch(url);
        const data = await response.json();
        setHeroData(data.data.results[0]); 
        setIsLoading(false);
        document.querySelector('.marvel-header').classList.remove('marvel-header__loading');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[id]);
  
    return (
    <div className="detail" id={`detail-${heroId}`}>
      <HeroBanner hero={heroData} isLoading={isLoading} />
      <div className='comics--main'>
        <Comics heroId={heroId}/>
      </div>
      
    </div>
  );
};
export default Detail;