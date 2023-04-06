import React from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

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
        <button onClick={() => props.setPageCount(props.pageCount + 1)}>
          Next
        </button>
      </div>
      <div className='movie-list-wrapper'>
        {props.movies?.map((movie) => (
          <div
            key={movie.imdbID}
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
