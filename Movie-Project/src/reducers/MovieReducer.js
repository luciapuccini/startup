import { FETCH_DATA, MOVIE_DETAILS, GET_MOVIES } from '../actions/types';
const initialState = {
  movies: [],
  movie: {},
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        movies: action.payload
      }
    case GET_MOVIES:
     
      return {
        ...state,
        movies: action.payload
      }
    case MOVIE_DETAILS:
      
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;

  }

}
