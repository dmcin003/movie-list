import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) =>{
  console.log(props.movies);
  return (<div>
    {props.movies.map((movie)=>{
        return (<div className ="movieList">
          <ul><MovieListEntry movie={movie} /></ul>
          </div>)
      }
    )}



        </div>);




};

export default MovieList;