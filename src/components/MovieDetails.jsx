import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);

  const params = useParams();
  const { id } = params;
  // console.log(id);

  // using this component we fetch details of a particular movie
  const fetchMovieDetails = async () => {
    const URL = `http://www.omdbapi.com/?i=${id}&apikey=60c72e71`;

    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data.Poster);
    setMovieDetails(data);

    // console.log(movieDetails);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="card">
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt=""  />
      <p>{movieDetails.Genre}</p>

      <p>Plot: {movieDetails.Plot}</p>
      <p>Release Date: {movieDetails.Released}</p>
      <p>Movie Length: {movieDetails.Runtime}</p>
    </div>
  );
}

export default MovieDetails;
