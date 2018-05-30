import React from 'react';
import PropTypes from 'prop-types';

class MovieItem extends React.Component {
  render() { //note: always return ONE element


    return (
      <li className="Movie">
      <strong>{this.props.movie.title}</strong>: <br/>
       Category: {this.props.movie.category}<br/>
       Year: {this.props.movie.year}<br/>
       Duration: {this.props.movie.duration}

      </li>
    );
  }
}
MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
