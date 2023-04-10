import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState([]);

  const params = useParams();
  const { id } = params;
  const searchTerm = movieDetails.Title + ' Trailor';
  console.log(id);

  const handleYoutubeSearch = () => {
    window.open(`https://www.youtube.com/results?search_query=${searchTerm}`);
  };

  const fetchMovieDetails = async () => {
    const URL = `http://www.omdbapi.com/?i=${id}&apikey=60c72e71`;

    if (props.cacheMovieCard[id]) {
      setMovieDetails(props.cacheMovieCard[id]);
    } else {
      const response = await fetch(URL);
      const data = await response.json();
      //console.log(data.Poster);
      props.setCacheMovieCard({ ...props.cacheMovieCard, [id]: data });
      setMovieDetails(data);
    }

    // console.log(movieDetails);
  };

  //console.log(props.cacheMovieCard)

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <>
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
        <button onClick={handleYoutubeSearch}>
          Click here to search for {searchTerm} tutorials on YouTube
        </button>
      </div>
    </>
  );
}

export default MovieDetails;
