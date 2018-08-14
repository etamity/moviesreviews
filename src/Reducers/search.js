import keyMirror from 'keymirror';
import { store } from 'App';

export const SearchActionTypes = keyMirror({
  UPDATE_RESULTS: null,
  APPEND_RESULTS: null,
  UPDATE_ERROR: null,
  UPDATE_LOADING: null,
  UPDATE_GENRES: null,
  UPDATE_FILTERS_KEYWORDS: null,
  UPDATE_FILTERS_GENRESID: null,
  RESET_RESULTS: null
});

let initState = {
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

export const SearchAction = {
  updateResults: (results) => {
    const action = {
      type: SearchActionTypes.UPDATE_RESULTS,
      payload: results
    }
    store.dispatch(action);
  },
  resetResults: () => {
    const action = {
      type: SearchActionTypes.RESET_RESULTS,
      payload: null
    }
    store.dispatch(action);
  },
  appendResults: (results) => {
    const action = {
      type: SearchActionTypes.APPEND_RESULTS,
      payload: results
    }
    store.dispatch(action);
  },
  updateLoading: (loading) => {
    const action = {
      type: SearchActionTypes.UPDATE_LOADING,
      payload: loading
    }
    store.dispatch(action);
  },
  updateGenres: (genres) => {
    const action = {
      type: SearchActionTypes.UPDATE_GENRES,
      payload: genres
    }
    store.dispatch(action);
  },
  updateKeywords: (keywords) => {
    const action = {
      type: SearchActionTypes.UPDATE_FILTERS_KEYWORDS,
      payload: keywords
    }
    store.dispatch(action);
  },
  updateGenresId: (genresId) => {
    const action = {
      type: SearchActionTypes.UPDATE_FILTERS_GENRESID,
      payload: genresId
    }
    store.dispatch(action);
  }
}