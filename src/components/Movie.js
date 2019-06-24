import React from 'react';


const Movie = (props) => {
    return(
        <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
          {
              props.image == null ? <img src="https://via.placeholder.com/150" alt="spiderman"/> : <img src={`https://image.tmdb.org/t/p/w300${props.image}`}  alt="superman"/>
          }
            
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            {props.popularity}
            {props.title}
          </div>
          <div className="card-action">
            <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>This is a link</a>
            <a href="#" >add to favorite</a>

           
            
          </div>
        </div>
      </div>

    )
 

}

export default Movie;