import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');

  const routeChangeGenre = () => {
    // console.log('val', val);
    const path = `/genre/${selectedOption}`;
    // console.log(path)
    navigate(path);
  };

  if (selectedOption) {
    console.log('selectedOption', selectedOption);
    // props.fetchGenre(arr);
    props.fetchVal(selectedOption);
    routeChangeGenre();
  }

  var query;
  if (props.clickEvent) {
    query = props.genre;
  } else {
    query = props.movies;
  }

  const routeChange = (id) => {
    const path = `/id/${id}`;
    console.log('id', id);
    navigate(path);
  };

  //console.log(query);

  useEffect(() => {
    query = props.genre;
  }, [props.clickEvent, props.genre]);

  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="movie-list">
      {!props.clickEvent && (
        <select
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Mystery">Mystery</option>
        </select>
      )}
      {/* {!props.clickEvent &&
        Genres.map((item) => (
          <button
            key={item}
            value={item}
            onClick={(event) => {
              console.log('event',event.target.value)
              setVal(event.target.value);
              // props.fetchVal(event.target.value);
              // routeChangeGenre();
            }}
          >
            {item}
          </button>
        ))} */}
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
