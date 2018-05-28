import React from 'react';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import PropTypes from 'prop-types';



class App extends React.Component {
  constructor(props) {//defining initial keys
    super(props);
    this.state = {
      movies: []
    };
    this.handleAddMovie= this.handleAddMovie.bind(this);
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

      const newMovies =this.state.movies.slice();
      newMovies.push(movie);
      this.setState({movies:newMovies});
    }

  render() { //note: always return ONE element
    return (
      <div className="App">
        <AddMovie addMovie= {this.handleAddMovie}/>
        <Movies movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
