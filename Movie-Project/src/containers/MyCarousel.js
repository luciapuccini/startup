import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ movies: nextProps.items });
  }
  
  render() {
    const movieItems = this.props.movies.map(movie => (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={movie.images.fanart} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    ));

    return (
      <div>
        <h1>Movies</h1>
        {movieItems}
      </div>

    );
  }
}

export default MyCarousel;

