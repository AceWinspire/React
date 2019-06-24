import React from 'react';
import Movie from './Movie';


const MovieInfo = (props) => {
    return(
        <div className="container">
        <div className="row" onClick={props.closedMovieInfo}>
        <i className="material-icons">close</i>
        </div>
        <div className="row">
        <h1>{props.currentMovie.title}</h1>
        
        </div>
        </div>
    )
}

export default MovieInfo;