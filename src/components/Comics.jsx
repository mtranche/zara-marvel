import { useState, useEffect } from "react";
import image_not_available from "../assets/images/image_not_available.jpg";

const Comics = ({heroId}) => {  
  const [comics, setComics] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const characterComicsApi = `${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}/${heroId}/comics?apikey=${import.meta.env.VITE_MARVEL_API_KEY}`;       
        const response = await fetch(characterComicsApi);
        const data = await response.json();
        console.log(data)
        setComics(data.data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[heroId]);
  
  console.log(comics)
  return (
      <div className="detail-comics-container">
        <h2>Comics</h2>
        <div className="comic-wrapper">
          {comics.length? comics.map((comic) => (
            <div key={comic.id} className="comic">
              <div>
                <a href={comic.resourceURI} target="_blank" rel="noopener noreferrer" title="go to resource">
                  <img 
                    src={comic.thumbnail.path && comic.thumbnail.extension
                      ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                      : image_not_available} 
                    alt={comic.title}
                   />
                </a>
              </div>
              <p className="comic-title" title={comic.title}>{comic.title}</p>
              <p className="comic-year">{comic.dates.find(date => date.type === 'onsaleDate').date.split('-')[0]}</p>            
            </div>
          )):<p>No comics found</p>}
      </div>
      </div>
  );
};
export default Comics;