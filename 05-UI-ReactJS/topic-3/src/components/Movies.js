//listens all movies
import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchData} from '../actions/MovieActions';

class Movies extends React.Component {
  componentWillMount(){
    this.props.fetchData();
  }
  render() {
      const movieItems = this.props.movies.map(movie => (
          <div key= {movie.id}>
            <h3>{movie.title}</h3>
          </div>
      ));
      return(
        <MovieItem  key = {movie.title} movie = {movie} />
      );
      });
    }

    return (
      <div>
        <h1>Movies</h1>
        {movieItems}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movieList: state.movieList.movies
})


export default connect(mapStateToProps, { fetchData } )(Movies);
