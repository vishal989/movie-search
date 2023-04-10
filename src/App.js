import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BackToTop from './components/BackToTop';
import './style.css';
import Genre from './components/Genre';
import Genres from './components/Genres';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');
  const [cache, setCache] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const [genre, setGenre] = useState([]);
  const [clickEvent, setClickEvent] = useState(false);
  const fetchGenre = (genreList) => {
    setGenre(genreList);
    setClickEvent(true);
  };
  

   console.log(genre);

  const fetchMovies = async (searchTerms, pageCount) => {
    const URL = `http://www.omdbapi.com/?s=${searchTerms}&page=${pageCount}&apikey=60c72e71`;

    if (cache[searchTerms + pageCount]) {
      setMovies(cache[searchTerms + pageCount]);
    } else {
      const response = await fetch(URL);
      const data = await response.json();
      //console.log(data.Search);
      setCache({ ...cache, [searchTerms + pageCount]: data.Search });
      if (data.Search) setMovies(data.Search);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerms, pageCount);
    //console.log(cache.length);
  }, [searchTerms, pageCount]);

  return (
    <div className="App">
      <BackToTop />

      <BrowserRouter>
        <Routes>
          <Route
            path="/genre"
            element={
              <Genres
                fetchGenre={fetchGenre}
                movies={movies}
                searchTerms={searchTerms}
                setSearchTerms={setSearchTerms}
                pageCount={pageCount}
                setPageCount={setPageCount}
                genre={genre}
                clickEvent={clickEvent}
                setClickEvent={setClickEvent}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <Genre
                  movies={movies}
                  fetchGenre={fetchGenre}
                  clickEvent={clickEvent}
                  setClickEvent={setClickEvent}
                />
                <MovieList
                  movies={movies}
                  searchTerms={searchTerms}
                  setSearchTerms={setSearchTerms}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                  genre={genre}
                  clickEvent={clickEvent}
                  setClickEvent={setClickEvent}
                />
              </>
            }
          />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
