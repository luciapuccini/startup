import {FETCH_DATA,NEW_MOVIE} from '../actions/types';
const initialState = {
  movies: [],
  movie: {}
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log('dispatch action fetch data');
      return{
        ...state,
        movies: action.payload
      }
    case NEW_MOVIE:
      console.log('dispatch action new movie');
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;

  }

}
