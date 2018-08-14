import keyMirror from 'keymirror';
import { store } from 'App';

export const AppActionTypes = keyMirror({
    UPDATE_FAVOURITES: null,
    APPEND_FAVOURITES: null,
    REMOVE_FAVOURITE: null,
    UPDATE_ERROR: null,
    UPDATE_KEYWORDS: null
});


export const AppAction = {
    updateFavourites: (favourites) => {
        const action = {
            type: AppActionTypes.UPDATE_FAVOURITES,
            payload: favourites
        }
        store.dispatch(action);
    },

    appendFavourite: (favourite) => {
        const action = {
            type: AppActionTypes.APPEND_FAVOURITES,
            payload: favourite
        }
        store.dispatch(action);
    },
    removeFavourite: (favourite) => {
        const action = {
            type: AppActionTypes.REMOVE_FAVOURITE,
            payload: favourite
        }
        store.dispatch(action);
    },
    updateError: (error) => {
        const action = {
            type: AppActionTypes.UPDATE_ERROR,
            payload: error
        }
        store.dispatch(action);
    }
}


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