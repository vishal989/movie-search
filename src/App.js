import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BackToTop from './components/BackToTop';
import './style.css';

const App = () => {
  const [movies, setMovies] = useState([]);   // to keep the list of the movies fetched 
  const [searchTerms, setSearchTerms] = useState('');  // stores the keyword being typed in the search bar
  const [cache, setCache] = useState({});  // caches the movielist with key being (searchterm+pagecount)
  const [pageCount, setPageCount] = useState(1);  // stores the page number

  const fetchMovies = async (searchTerms, pageCount) => {
    const URL = `http://www.omdbapi.com/?s=${searchTerms}&page=${pageCount}&apikey=60c72e71`;
    
    // if already cached then no need to make an api call
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
      <BackToTop/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                searchTerms={searchTerms}
                setSearchTerms={setSearchTerms}
                pageCount={pageCount}
                setPageCount={setPageCount}
              />
            }
          />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
