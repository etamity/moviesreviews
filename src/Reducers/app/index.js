import { AppActionTypes } from './actions';

export const initState = {
    footer: {
        label: 'Movies Revies',
        copyright: '©Copyright 2018'
    },
    favourites: [],
    user: {
        avatar: 'https://pbs.twimg.com/profile_images/713294865405255680/lroJEC1r_400x400.jpg',
        username: 'Joey'
    },
    logo: 'Mobie Revies',
    error: ''
};

export default function update(state = initState, action) {
    switch (action.type) {
        case AppActionTypes.UPDATE_FAVOURITES:
            return Object.assign({}, state, { favourites: action.payload });
        case AppActionTypes.APPEND_FAVOURITES:
            return Object.assign({}, state, { favourites: state.favourites.concat(action.payload) });
        case AppActionTypes.REMOVE_FAVOURITE:
            return Object.assign({}, state, { favourites: state.favourites.filter(movie => movie.id !== action.payload.id) }); 
        case AppActionTypes.UPDATE_ERROR:
            return Object.assign({}, state, { error: action.payload });
        case AppActionTypes.UPDATE_KEYWORDS:
            return Object.assign({}, state, { keywords: action.payload });
        default:
            return state;
    }
}
