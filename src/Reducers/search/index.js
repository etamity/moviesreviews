import { SearchActionTypes } from './actions';

export const initState = {
  loading: false,
  genres: [],
  filters: {
    genresId: -1,
    keywords: ''
  },
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  },
  error: null,
}

export default function update(state = initState, action) {
  switch (action.type) {
    case SearchActionTypes.UPDATE_RESULTS:
      return Object.assign({}, state, { movies: action.payload });
    case SearchActionTypes.APPEND_RESULTS:
      const movies = Object.assign({}, action.payload, {
        results: state.movies.results.concat(action.payload.results)
      });
      return Object.assign({}, state, { movies });
    case SearchActionTypes.UPDATE_LOADING:
      return Object.assign({}, state, { loading: action.payload });
    case SearchActionTypes.UPDATE_GENRES:
      return Object.assign({}, state, { genres: action.payload });
    case SearchActionTypes.UPDATE_FILTERS_KEYWORDS:
      const updatedKeywords = Object.assign({}, state.filters, {
        keywords: action.payload
      });
      return Object.assign({}, state, { filters: updatedKeywords });
    case SearchActionTypes.UPDATE_FILTERS_GENRESID:
      const updatedGenresId = Object.assign({}, state.filters, {
        genresId: action.payload
      });
      return Object.assign({}, state, { filters: updatedGenresId });
    case SearchActionTypes.RESET_RESULTS:
      return Object.assign({}, state, { movies: initState.movies });
    default:
      return state;
  }
}