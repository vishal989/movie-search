import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom';

function Genre(props) {
  let arr = [];
  const navigate = useNavigate();

  let st = '';
  const [val, setVal] = useState('');

  const routeChange = () => {
    const path = '/genre';
    navigate(path);
  };

  const fetchMovieDetails = async (movie) => {
    const key = movie.imdbID;
    const URL = `http://www.omdbapi.com/?i=${key}&apikey=60c72e71`;

    const response = await fetch(URL);
    const data = await response.json();
    //console.log(val)
    const genreArray = await data.Genre.includes(val);
    //console.log(data.Genre.length)
    if (genreArray && !arr.includes(movie)) {
      arr.push(movie);
    }
  };

  useEffect(() => {
    props.movies?.map((movie) => fetchMovieDetails(movie));
  }, [props.movies, val]);

  const Genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];

  function clickHandler(item) {
    setVal(item);
    console.log('val', val);
    props.fetchGenre(arr);
    routeChange();
  }

  // const getGenres = () => {
  //   setVal(st);
  //   console.log(val);
  // }

  return (
    <div>
      {!props.clickEvent &&
        Genres.map((item) => (
          <button value={item} onClick={() => clickHandler(item)}>
            {item}
          </button>
        ))}
      {!props.clickEvent && (
        <button
          onClick={() => {
            st = 'Comedy';
            console.log(st);
            // setVal('Comedy');
            // console.log(val)
            props.fetchGenre(arr);
            routeChange();
          }}
        >
          Comedy
        </button>
      )}
      {/* {!props.clickEvent && (
        <select
          name="Genre"
          id="genre"
          onChange={(event) => {
            val = event.target.value;
            console.log(val);
            props.fetchGenre(arr);
            routeChange();
          }}
        >
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
        </select>
      )} */}
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
