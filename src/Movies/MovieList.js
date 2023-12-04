import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieCard
          key={movie.id} 
          movie={movie} 
          handleClick={() => navigate(`/movies/${movie.id}`)} 
        />
      ))}
    </div>
  );
}