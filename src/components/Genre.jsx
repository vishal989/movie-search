import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Genre(props) {
  let arr = [];
  const navigate = useNavigate();
  //const [val, setVal] = useState('');

  const routeChange = () => {
    const path = '/genre';
    navigate(path);
  };

  const fetchMovieDetails = async (movie) => {
    const key = movie.imdbID;
    const URL = `http://www.omdbapi.com/?i=${key}&apikey=60c72e71`;

    const response = await fetch(URL);
    const data = await response.json();
    const genreArray = await data.Genre.includes('Action');
    if(arr.includes(movie))console.log('Arya')
    if (genreArray && !arr.includes(movie)) {
      arr.push(movie);
    }
  };

  useEffect(() => {
    props.movies?.map((movie) => fetchMovieDetails(movie));
  }, [props.movies]);

  return (
    <div>
      {!props.clickEvent && <button
        onClick={() => {
          props.fetchGenre(arr);
          
          routeChange()
        }}
      >
        Action
      </button>}
      {/* <select
        name="Genre"
        id="genre"
        onChange={(event) => {
          setVal(event.target.value);

          props.fetchGenre(arr);
        }}
      >
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Mystery">Mystery</option>
      </select> */}
      {/* {genre?.map((g) => (
        <div key={g.imdbID}>
          {console.log(g)}
          <h2> {g.Title}</h2>
          <img src={g.Poster} alt=""></img>
        </div>
      ))} */}
      {/* <BrowserRouter>
        <Routes>
          <Route
            element={<MovieList genre={genre} clickEvent={clickEvent} />}
          />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default Genre;
