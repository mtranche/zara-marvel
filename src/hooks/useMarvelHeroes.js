import { useState } from 'react';

const useMarvelHeroes = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchHeroes = async (id) => {
        const charactersApi = id?`${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}/${id}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}`
                                :`${import.meta.env.VITE_MARVEL_API_CHARACTERS_ENDPOINT}?apikey=${import.meta.env.VITE_MARVEL_API_KEY}${import.meta.env.VITE_MARVEL_API_DEFAULT_PARAMS}`;
       try {
            const response = await fetch(charactersApi);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return {
        heroes_: data?.data?.results || [],
        isLoading,
        error,
        fetchHeroes,
        setData
    };
};

export default useMarvelHeroes;