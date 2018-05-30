//FIX ME: i should use one of those api's but
//one does't take POST request
// the other returns an object instead of an array
import { FETCH_DATA, NEW_MOVIE } from './types';

export const fetchMovies = () => dispatch => {
  fetch('http://tv-v2.api-fetch.website/movies/10?sort=last%20added&order=1&genre=drama')
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_DATA,
        payload: movies
      })
    );
};

export const createMovie = movieData => dispatch => {
  fetch('http://www.omdbapi.com/?s=batman&apikey=85235fe7&type=movie', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(movieData)
  })
    .then(res => res.json())
    .then(movie =>
      dispatch({
        type: NEW_MOVIE,
        payload: movie
      })
    );
};
