import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/MovieActions'

class MovieList extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newMovie) {
      this.props.movies.unshift(nextProps.newMovie);
    }
  }

  render() {
    const movieItems = this.props.movies.map(movie => (
      <div key={movie._id}>
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
      </div>
    ));
    return (
      <div>
        <h1>Movies</h1>
        {movieItems}
      </div>
    );
  }
}

MovieList.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,

};

const mapStateToProps = state => ({
  movies: state.movies.movies,

});

export default connect(mapStateToProps, { fetchMovies })(MovieList);
