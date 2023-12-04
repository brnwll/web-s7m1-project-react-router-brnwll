import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard'

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(response => {
        response.data 
          ? setMovie(response.data)
          : navigate('/');
      })
      .catch(error => console.error(error));
  }, [id, navigate]);

  const saveMovie = movie => {
    props.addToSavedList(movie);
    navigate('/');
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie} />
      <div className="save-button" onClick={() => saveMovie(movie)}>Save</div>
    </div>
  );
}