import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovies} from '../actions/MovieActions';

class SearchMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText : '',
      movieSearch : []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({ searchText: e.target.value }); 
    e.preventDefault();
  }
    
  onSubmit(e) {
    e.preventDefault();
    let searchText = this.state.searchText
    this.setState({
      [e.movieSearch]: this.props.getMovies(searchText)
    });
    
  }

  render() {
    
    const movieItems = this.state.movieSearch.map(movie => (
      <div key={movie.id}>
        <h3>{movie.title}</h3>
       
      </div>
    ));
    return (
      <div>
        
        <div className="container">
          <div className="jumbotron">
            <h3 className="text-center">Search For Any Movie</h3>
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input 
                type="text"
                  className="form-control"
                  id="searchText" 
                  placeholder="Search Movies..."
                  onChange={this.onChange}
                  value={this.state.searchText}
                  
                />
            <br />
            <button type="submit">
            Submit
            </button>
            </form>
            <hr/>
            <div>
              <h2>Search</h2>
             {movieItems}
            </div>
          </div>
        </div>
        </div>

    );
  }
}

SearchMovie.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});
export default connect(mapStateToProps, { getMovies })(SearchMovie);
