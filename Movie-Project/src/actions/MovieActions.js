import { FETCH_DATA, GET_MOVIES, MOVIE_DETAILS } from './types';

export const fetchMovies = () => dispatch => {
  fetch('http://tv-v2.api-fetch.website/movies/10?sort=last%20added&order=-1&genre=action')
    .then(res => res.json())
    .then(movies =>
      dispatch({
        type: FETCH_DATA,
        payload: movies
      })
    );
};

export const getMovies = (searchText) => dispatch => {
  try {
    fetch('http://www.omdbapi.com/?s='+searchText+'&apikey=85235fe7')
    .then(res =>   res.json()  ) 
    .then(movies =>
    dispatch({
      type: GET_MOVIES,
      payload: movies.Search //need this to get an array from the api
    })
  );
    
  } catch (error) {
    console.log("action error:"+error);
  }
  
 
};
   
export const getMovie = (id) => dispatch => {
        fetch('http://www.omdbapi.com/?i='+id+'&apikey=85235fe7')
        .then( res => res.json() )
        .then(movie =>
        dispatch({
        type: MOVIE_DETAILS,
        payload: movie
        })
    );
    
}

