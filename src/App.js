import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies')
        .then(response => setMovies(response.data))
        .catch(error => console.error('Server Error', error));
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    if (!saved.find(m => m.id === movie.id)) {
      setSaved([...saved, movie])
    }
  };

  return ( movies && 
    <>
      <SavedList list={saved} />
      <Routes>
        <Route 
          path='/' 
          element={<MovieList 
          movies={movies} />} 
        />
        <Route 
          path='movies/:id' 
          element={<Movie addToSavedList={addToSavedList} />} 
        />
      </Routes>
    </>
  );
}
