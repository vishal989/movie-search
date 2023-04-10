import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);

  const params = useParams();
  const { id } = params;
  console.log(id);

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
    <div className="movie-details-card">
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt="" />
      <p>
        <b>Genre: </b>
        {movieDetails.Genre}
      </p>

      <p>
        <b>Plot: </b> {movieDetails.Plot}
      </p>
      <p>
        <b>Release Date: </b>
        {movieDetails.Released}
      </p>
      <p>
        <b>Movie Length: </b>
        {movieDetails.Runtime}
      </p>
    </div>
  );
}

export default MovieDetails;
