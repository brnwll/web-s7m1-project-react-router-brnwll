import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MovieCard from './MovieCard'

export default function SavedList(props) {
  const navigate = useNavigate();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link
          key={movie.id} 
          to={`/movies/${movie.id}`} 
          element={<MovieCard movie={props.movie}/>}
        >{movie.title}</Link>
      ))}
      <div className="home-button" onClick={() => navigate('/')}>Home</div>
    </div>
  );
}