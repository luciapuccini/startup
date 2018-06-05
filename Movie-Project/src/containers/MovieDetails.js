import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../utils/css/style.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     details:{}
    }
  }

  render() {
    
    const movie = this.props.details
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <img className="thumbnail" src={movie.Poster} alt="movie poster"  />
          </div>
          <div className="col-md-6">
            <h2>{movie.Title}</h2>
            <ul className="list-group ">
              <li className="list-group-item"><strong>Genre:</strong> {movie.Genre}</li>
              <li className="list-group-item"><strong>Released:</strong> {movie.Released}</li>
              <li className="list-group-item"><strong>Rated:</strong> {movie.Rated}</li>
              <li className="list-group-item"><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
              <li className="list-group-item"><strong>Director:</strong> {movie.Director}</li>
              <li className="list-group-item"><strong>Writer:</strong> {movie.Writer}</li>
              <li className="list-group-item"><strong>Actors:</strong> {movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="well">
            <h3>Plot</h3>
            {movie.Plot}
            <hr />
          </div>
        </div>
      </div>

    )
  }
}
MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  details: state.movies.movie,
});

export default connect(mapStateToProps,)(MovieDetails);
