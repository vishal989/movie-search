import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

// this is used to display the list of the movies that are fetched by the api call
const MovieList = (props) => {
  const navigate = useNavigate();
  const routeChange = (id) => {
    const path = `/${id}`;
    navigate(path);
  };

  return (
    <div className="movie-list">
      <SearchBar 
        setPageCount={props.setPageCount}
        searchTerms={props.searchTerms}
        setSearchTerms={props.setSearchTerms}
      />
      
      <div>
        <button
          onClick={
            props.pageCount === 1
              ? () => props.setPageCount(1)
              : () => props.setPageCount(props.pageCount - 1)
          }
        >
          prev
        </button>
        <button onClick={() => props.setPageCount(props.pageCount + 1)}>Next</button>
      </div>

      {props.movies?.map((movie) => (
        <div
          key={movie.imdbID}
          className="card"
          onClick={() => routeChange(movie.imdbID)}
        >
          <img src={movie.Poster} alt=""></img>
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
