import React, { useContext } from 'react';
import { MovieContext , MovieProvider } from './MovieContext';
import Card from '../Card';

const MovieList = () => {
  const { popularMovies, error } = useContext(MovieContext);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Filmes Populares</h2>
      <ul>
        {popularMovies.map((movie) => (
          <Card key={movie.id} filme={movie}/>
        ))}
      </ul>
    </div>
  );
};



const PopularFilms = () =>{
    return (
        <MovieProvider>
          <div>
            <MovieList />
          </div>
        </MovieProvider>
      );
}
    

export default PopularFilms;
