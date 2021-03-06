import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/MovieActions';
import {Carousel} from 'react-bootstrap';
import '../utils/css/style.css';


class Home extends Component {

  componentWillMount() {
    this.props.fetchMovies();
  }

    render() {
      const movieItems =
      <Carousel>
            {this.props.movies.map( movie => (
            <Carousel.Item>
                  <div key={movie.id}>
                        <img className="img-responsive" alt="active movie" src={movie.images.fanart} />
                        <Carousel.Caption>
                              <h3>{movie.title}</h3>
                        </Carousel.Caption>
                  </div>
            </Carousel.Item>
            ))}
      </Carousel>

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
