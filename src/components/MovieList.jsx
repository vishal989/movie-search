import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  const navigate = useNavigate();
  var query;
  if (props.clickEvent) {
    query = props.genre;
    // props.setClickEvent(false);
  } else {
    query = props.movies;
  }

  const routeChange = (id) => {
    const path = `/${id}`;
    navigate(path);
  };

  //console.log(query);

  useEffect(() => {
    query = props.genre;
  }, [props.clickEvent]);

  return (
    <div className="movie-list">
      {!props.clickEvent && (
        <SearchBar
          setPageCount={props.setPageCount}
          searchTerms={props.searchTerms}
          setSearchTerms={props.setSearchTerms}
        />
      )}
      {!props.clickEvent && (
        <div>
          <button
            onClick={
              props.pageCount === 1
                ? () => props.setPageCount(1)
                : () => props.setPageCount(props.pageCount - 1)
            }
          >
            Prev
          </button>
          <button onClick={() => props.setPageCount(props.pageCount + 1)}>
            Next
          </button>
        </div>
      )}
      <div className="movie-list-wrapper">
        
        {query?.map((movie) => (
          <div
            key={movie.imdbID}
            id={movie.imdbID}
            className="movie-list-card"
            onClick={() => routeChange(movie.imdbID)}
          >
            <h2> {movie.Title}</h2>
            <img src={movie.Poster} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
