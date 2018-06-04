import React, {Component} from 'react'; 
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMovies, getMovie} from '../actions/MovieActions';
import MovieDetails from './MovieDetails';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";


class SearchMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      movieSearch: [],
      movieIdSearch:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showDetails = this.showDetails.bind(this); 
  }
  
  onChange(event) {
    this.setState({ searchText: event.target.value }); 
    event.preventDefault();
  }
    
  onSubmit(event) {
    event.preventDefault();
    let searchText = this.state.searchText
    this.setState({
      [event.movieSearch]: this.props.getMovies(searchText)
    });
  }
  showDetails(event) {
    event.preventDefault();
    let searchId = event.target.value;
    this.setState({
      [event.movieIdSearch]: this.props.getMovie(searchId)
    })
    console.log("traje:"+this.state.movieIdSearch);
    this.props.history.push('/movieDetails');
    };

   
      render() {
        const movieItems = this.props.movies.map(movie => (
          <div key={movie.imdbID}>
            <button
             type="button"
             className="btn btn-link" 
             id="searchId" 
             value={movie.imdbID} 
             onClick={this.showDetails}
             >
              {movie.Title}
             </button>
           
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
      }//render
    
};

 

  

SearchMovie.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired
  
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  movie: state.movieIdSearch
});
export default withRouter (connect(mapStateToProps, { getMovies,getMovie })(SearchMovie));
