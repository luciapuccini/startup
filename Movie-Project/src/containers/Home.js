import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/MovieActions'

class Home extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const movieItems = this.props.movies.map(movie => (
      
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img class="d-block w-100" src={movie.images.fanart} alt="first slide"/>
              </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="" alt="Second slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        
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

Home.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
 
});

export default connect(mapStateToProps, { fetchMovies })(Home);