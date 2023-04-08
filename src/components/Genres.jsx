import React from 'react';
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom';

function Genres(props) {
    const navigate=useNavigate();
    props.setClickEvent(true);
  return (
    <div>
      <div>
        <button onClick={() => {
            props.setClickEvent(false);
            navigate('/');
        }}>home</button>
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
