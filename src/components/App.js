import React, { Component } from 'react';
import Nav from './Nav'
import SearchArea from './SearchArea'
import MovieList from './MovieList'
import MovieInfo from './MovieInfo'
import Favorites from './Favorites'
import './App.css';






class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      currentMovie: null,
  
      

    }
  }

 
  
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4d3e7d92a8cb70b6f644283e8cbb2d67&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data=>{
      console.log(data);
      this.setState ({ movies: [...data.results] })
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })

  }

 

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    

    this.setState({ currentMovie: newCurrentMovie})

  }

  

  
 

  closedMovieInfo = () => {
    this.setState({ currentMovie: null})
  }




  render() {
    return (
      <div className="App">
      
     
      {this.state.currentMovie == null ? <div><Nav /> <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <MovieList movies={this.state.movies} viewMovieInfo={this.viewMovieInfo} />
      </div> :  <MovieInfo closedMovieInfo={this.closedMovieInfo} currentMovie={this.state.currentMovie}  />
     
       }

      

      
      
     

  
      </div>
    );
  }
}

export default App;
