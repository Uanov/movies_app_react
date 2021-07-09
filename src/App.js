import React, {useState, useEffect} from 'react';
import './assets/style/_normalize.scss';
import './assets/style/_variables.scss';
import './App.scss';
import {MoviesList} from './components/MoviesList';
import {FindMovie} from './components/FindMovie';
import putMovieIntoDB from './api/putMovieIntoDB';
import {getMovieDB} from './api/getMovieDB';
import {Header} from "./components/Header/Header";

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMovieDB('/auth/allMovies');

      setMovies([...data]);
    })();
  }, []);

  const handleAddMovies = (movie) => {
    if (!movies.find(item => item.imdbID === movie.imdbID)) {
      setMovies([...movies, movie]);
      console.log(movie);
      putMovieIntoDB(movie);
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies}/>
        </div>
        <div className="sidebar">
          <FindMovie handleAddMovies={handleAddMovies}/>
        </div>
      </div>
    </>
  );
};

