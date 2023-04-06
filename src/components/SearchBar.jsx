import React from 'react';

function SeachBar(props){

  return (
    <div>
        <form>
            <input type="text"
            value={props.searchTerms}
            onChange={(event) => {
              props.setPageCount(1);
              props.setSearchTerms(event.target.value)
            }}
            placeholder="Search a movie"
            />
        </form>
    </div>
  )
}

export default SeachBar;