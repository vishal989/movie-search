import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from './MovieList';

function Genres(props) {
  const navigate = useNavigate();
  const [g, setG] = useState([]);
  props.setClickEvent(true);

  const routeChange = (id) => {
    const path = `/${props.newVal}/${id}`;
    navigate(path);
  };


  const fetchMovieDetails = async (movie) => {
    const key = movie.imdbID;
    const URL = `http://www.omdbapi.com/?i=${key}&apikey=60c72e71`;

    const response = await fetch(URL);
    const data = await response.json();
    const genreArray = await data.Genre.includes(props.newVal);

    if (genreArray) {
      // arr.push(movie);
      // setG((g) => [...g, movie]);
      // console.log('g', g.length);
      return true;
    }

    return false;
    //console.log('arr lenght', arr.length)
  };

  // g?.map((movie) => console.log('movie', movie));

  const update = async (movies) => {
    let array = [];
    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      if (await fetchMovieDetails(movie)) {
        array.push(movie);
      }
    }

    setG((g) => array);
    console.log(array);
    console.log(g);
  };
  useEffect(() => {
    update(props.movies);
  }, [props.movies]);

  //props.fetchGenre(arr);

  return (
    <>
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
        genre={g}
        clickEvent={props.clickEvent}
        setClickEvent={props.setClickEvent}
      />

      {/* <div className="movie-list">
        <div className="movie-list-wrapper">
          {g?.map(
            (movie) => (
              <div
                key={movie.imdbID}
                className="movie-list-card"
                onClick={() => routeChange(movie.imdbID)}
              >
                <h2> {movie.Title}</h2>
                <img src={movie.Poster} alt=""></img>
              </div>
            )
            //console.log('1',movie)
          )}
         
        </div>
      </div> */}
    </>
  );
}

export default Genres;
