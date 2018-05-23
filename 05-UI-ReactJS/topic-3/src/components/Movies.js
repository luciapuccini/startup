//listens all movies
import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';


class Movies extends React.Component {

  render() { //note: always return ONE element
    let movieItem;
    if (this.props.movies){
      movieItem = this.props.movies.map (movie => {
      //  console.log(movie);
      return(
        <MovieItem  key = {movie.title} movie = {movie} />
      );
      });
    }

    return (
      <div className="Movies">
        {movieItem}

      </div>
    );
  }
}
//type validation
Movies.propTypes = {
  movies: PropTypes.array,

}

export default Movies;
