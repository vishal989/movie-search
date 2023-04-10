import React from 'react';
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom';

function Genres(props) {
  const navigate = useNavigate();
  props.setClickEvent(true);

  // console.log('Genres', props.genre)

  // let arr = [];
  // const fetchMovieDetails = async (movie) => {
  //   const key = movie.imdbID;
  //   const URL = `http://www.omdbapi.com/?i=${key}&apikey=60c72e71`;

  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   const genreArray = await data.Genre.includes(val);
  //   if (genreArray && !arr.includes(movie)) {
  //     arr.push(movie);
  //   }
  // };

  // props.movies?.map((movie) => fetchMovieDetails(movie));
  // props.fetchGenre(arr);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            props.setClickEvent(false);
            navigate('/');
          }}
        >
          home
        </button>
      </div>
      <MovieList
        movies={props.movies}
        searchTerms={props.searchTerms}
        setSearchTerms={props.setSearchTerms}
        pageCount={props.pageCount}
        setPageCount={props.setPageCount}
        genre={props.genre}
        clickEvent={props.clickEvent}
        setClickEvent={props.setClickEvent}
      />
    </div>
  );
}

export default Genres;
