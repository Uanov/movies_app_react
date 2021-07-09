import React, { useState } from 'react';
import './Header.scss';
import './Search-bar.scss';
import imdbSVG from '../../assets/img/imdb.svg';
import triangleSVG from '../../assets/img/triangle_down.svg';
import searchSVG from '../../assets/img/icon-search.svg';
import {findMovieDB} from "../../api/findMovies";

export const Header = () => {
  const [searchName, setSearchName] = useState(null)

  const handleChangeSearchName = (value) => {
    setSearchName(value);
  }

  return (
    <header className="header">
    <div className="header-wrapper wrap">
      <div className="logo">
        <img
          src={imdbSVG}
          alt="imdb logo"
          className="logo__image"
        />
      </div>
      <div className="search-bar">
        <div className="search-bar__genre">
          <span>All</span>
          <img src={triangleSVG} alt="arrow down"/>
        </div>
        <div className="search-bar__input-wrap">
          <input
            className="search-bar__input"
            maxLength="100"
            onChange={(e) => {handleChangeSearchName(e.target.value)}}
          />
        </div>
        <div className="search-bar__button-search" onClick={() => findMovieDB(searchName)}>
          <img src={searchSVG} alt="icon search"/>
        </div>
      </div>
    </div>
  </header>
  )
}
