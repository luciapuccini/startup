import {FETCH_DATA, MOVIE_DETAILS, GET_MOVIES} from '../actions/types';
//ojo aca recivo de la api un obj
const initialState = {
  movies: [], 
  movie: {},
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log('dispatch action fetch data');
      return{
        ...state,
        movies: action.payload
      }
    case GET_MOVIES:
      console.log('dispatch action GET MOVIES');
      return{
        ...state,
        movieSearch: action.payload.Search
      }
    case MOVIE_DETAILS:
      console.log('dispatch action new movie');
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;

  }

}
