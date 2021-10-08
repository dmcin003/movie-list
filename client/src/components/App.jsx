import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import AddMovies from './AddMovies.jsx';
import WatchButton from './WatchButton.jsx';
class App extends React.Component{

constructor(props){
  super(props);

  this.state= {movies:[
    {title:'Mean Girls'},
    {title:'Hackers'},
    {title:'The Grey'},
    {title:'Sunshine'},
    {title:'Ex Machina'}
  ],
  searchedMovies:[],
  addedMovies:[],
  searchEntry:'',
  addMovieEntry:''}

  this.originalMovies = this.state.movies;
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
  this.handleMovieTitleSubmit = this.handleMovieTitleSubmit.bind(this);
  this.refresh = this.refresh.bind(this);
}




handleMovieTitleChange(event){
  var newMovie = event.target.value;
  this.setState({addMovieEntry:newMovie});


}
handleMovieTitleSubmit(event){
  event.preventDefault();
  var newMovies = this.state.addedMovies.slice();
  newMovies.push({title:this.state.addMovieEntry});
  var copy = this.state.movies.slice();
  copy.push({title:this.state.addMovieEntry})
  this.setState({addedMovies:newMovies,movies:copy});


}

handleChange(event){

  var searchInput = event.target.value;
  this.setState({searchEntry:searchInput});
  if(searchInput === ''){
    this.setState({movies:this.state.movies});
  }



}

handleSubmit(event){


  event.preventDefault();
  var searchString = this.state.searchEntry;


  var searchedMovies = this.state.movies.filter((movie) =>{
    if(searchString === movie.title){
      return movie;
    }
  });
  console.log(searchedMovies);

  this.setState({searchedMovies:[]});
  this.setState({searchedMovies:searchedMovies});










}

refresh(event){
  this.setState({movies:this.state.movies});
}

render(){
  return(<div>
      <h1>Movie List</h1>
    <div><AddMovies submit={this.handleMovieTitleSubmit} change={this.handleMovieTitleChange}/></div>
    <br></br>
    <div><Search submit={this.handleSubmit} change={this.handleChange} /><button onClick={this.refresh}>Refresh</button></div>
    <div><WatchButton name ={'Watched'}/></div>
    <div><WatchButton name ={'To Watch'}/></div>
    <div><MovieList movies={this.state.movies} /></div>
    <div>
      <h1>You Searched...</h1><MovieList movies={this.state.searchedMovies} /></div>

  </div>
  );
}
}



export default App;