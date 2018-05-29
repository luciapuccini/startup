import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createMovie} from '../actions/MovieActions'

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      synopsis: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const movie = {
      title: this.state.title,
      body: this.state.synopsis
    };

    this.props.createMovie(movie);
  }

  render() {
    return (
      <div>
        <h1>Add Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Synopsis: </label>
            <br />
            <textarea
              name="synopsis"
              onChange={this.onChange}
              value={this.state.synopsis}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  createMovie: PropTypes.func.isRequired
};

export default connect(null, { createMovie })(AddMovie);
