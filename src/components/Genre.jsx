import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom';

function Genre(props) {
  // let arr = [];
  
  const navigate = useNavigate();

  const [val, setVal] = useState('');

  const routeChange = () => {
    console.log('val', val);
    const path = `/${val}`;
    console.log(path)
    navigate(path);
  };


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
  // useEffect(() => {
  // }, [props.movies, val]);

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

  // function clickHandler(item) {
  //   setVal(item);
  //   console.log('val', val);
  //   props.fetchGenre(arr);
  //   routeChange();
  // }
  // console.log('val', val);
  //console.log('vals', val);

  if(val){
    // props.movies?.map((movie) => fetchMovieDetails(movie));
    // console.log('Array', arr);
    // props.fetchGenre(arr);
    props.fetchVal(val);
    routeChange();
  }
  
  return (
    <div>
      {!props.clickEvent &&
        Genres.map((item) => (
          <button
            key={item}
            value={item}
            onClick={() => {
              setVal(item);
            }}
          >
            {item}
          </button>
        ))}
      {/* {console.log(val)} */}

      {!props.clickEvent && (
        <select
          name="Genre"
          id="genre"
          onChange={(event) => {
            setVal(event.target.value);
            
            // props.fetchGenre(arr);
            // routeChange();
          }}
        >
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
        </select>
      )}
      {/* {genre?.map((g) => (
        <div key={g.imdbID}>
          {console.log(g)}
          <h2> {g.Title}</h2>
          <img src={g.Poster} alt=""></img>
        </div>
      ))} */}
    </div>
  );
}

export default Genre;
