import React, { useState } from 'react';
import './FindMovie.scss';

import { MovieCard } from '../MovieCard';
import { getMovieFromIMDB } from '../../api/getMovieFromIMDB';


export const FindMovie = ({ handleAddMovies }) => {
  const [searchMoviesValue, setSearchMoviesValue] = useState('');
  const [movieServer, setMovieServer] = useState(undefined);
  const handleChangeMoviesValue = (value) => {
    setSearchMoviesValue(value);
  };

  const findMovie = () => {
    getMovieFromIMDB(searchMoviesValue).then(result => setMovieServer(result));
  };

  return (
    <>
      <form className="find-movie">
        <div className="field">
          <label className="label" htmlFor="movie-title">
            Movie title
          </label>

          <div className="control">
            <input
              type="text"
              id="movie-title"
              placeholder="Enter a title to search"
              className="input is-danger"
              onChange={e => handleChangeMoviesValue(e.target.value)}
              value={searchMoviesValue}
            />
          </div>

          <p className="help is-danger">
            Can&apos;t find a movie with such a title
          </p>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-light"
              onClick={findMovie}
            >
              Find a movie
            </button>
          </div>

          <div className="control">
            <button
              type="button"
              className="button is-primary"
              onClick={() => {
                handleAddMovies(movieServer);
              }}
            >
              Add to the list
            </button>
          </div>
        </div>
      </form>

      <div className="wrap">
        <h2 className="title">Preview</h2>
        {(movieServer && movieServer.Response !== 'False') && (
          <MovieCard {...movieServer} />
        )}
      </div>
    </>
  );
};
