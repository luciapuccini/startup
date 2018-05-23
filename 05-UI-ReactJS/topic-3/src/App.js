import React from 'react';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
//import PropTypes from 'prop-types';

import './App.css';

class App extends React.Component {
  constructor() {//defining initial keys
    super();
    this.state = {
      movies: []
    };
  }
//lifecicle method : triggerd when componenet re-render here comes ajax methods
  componentWillMount() {
    this.setState( { movies: [
      {
        title: 'Infinity war',
        category: 'fiction',
        year: '2018',
        duration: '300'
      },
      {
        title: 'Titanic',
        category: 'drama',
        year: '2018',
        duration: '300'
      },
      {
        title: 'Hangover',
        category: 'comedy',
        year: '2018',
        duration: '300'
      },
    ]});
  }
  handleAddMovie(movie){
    //data will not persist
    let movies =this.state.movies;
    movies.push(movie);
    this.setState({movies:movies});
  }

  render() { //note: always return ONE element
    return (
      <div className="App">
        <AddMovie AddMovie= {this.handleAddMovie.bind(this)}/>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
