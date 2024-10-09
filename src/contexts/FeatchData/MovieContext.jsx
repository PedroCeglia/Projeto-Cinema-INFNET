import React, { createContext, useState, useEffect } from 'react';


export const MovieContext = createContext();

export const MovieProvider   = ({ children }) =>{
    const [popularMovies , setPopularMovies] = useState([])
    const [descricao , setDescricao] = useState([])
    const [error, setError] = useState(null);

    const apiKey = 'fcf2116dd512840b5075e72c3f7b09c3'


    //Filmes mais Populares
    const fetchMovies = async () => {
        try{
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
              );
              const data = await response.json();
              setPopularMovies(data.results);
        }catch (err){
            setError('Erro ao carregar filmes.');
        }
    };
  

  const fetchDescricao = async (movieId) => {
    try {
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      setDescricao((prevDescricao) => ({
          ...prevDescricao,
          [movieId]: data
      }));
    } catch (err) {
      setError('Erro ao carregar descrição.');
  }
}
  useEffect(() => {
    fetchMovies();
}, []);


return (
    <MovieContext.Provider value={{ popularMovies, descricao ,  error }}>
      {children}
    </MovieContext.Provider>
  );
};
