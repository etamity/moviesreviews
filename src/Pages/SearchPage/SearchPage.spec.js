import React from 'react';
import ReactDOM from 'react-dom';
import { SearchPageView } from './SearchPage';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

jest.mock('Reducers/search/actions', () => {
    return {
        SearchActionTypes: {
            UPDATE_RESULTS: 'UPDATE_RESULTS',
            APPEND_RESULTS: 'APPEND_RESULTS',
            UPDATE_ERROR: 'UPDATE_ERROR',
            UPDATE_LOADING: 'UPDATE_LOADING',
            UPDATE_GENRES: 'UPDATE_GENRES',
            UPDATE_FILTERS_KEYWORDS: 'UPDATE_FILTERS_KEYWORDS',
            UPDATE_FILTERS_GENRESID: 'UPDATE_FILTERS_GENRESID',
            RESET_RESULTS: 'RESET_RESULTS'
        }
    }
});

jest.mock('Reducers/app/actions', () => {
    return {
        AppActionTypes: {
            UPDATE_FAVOURITES: 'UPDATE_FAVOURITES',
            APPEND_FAVOURITES: 'APPEND_FAVOURITES',
            REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
            UPDATE_ERROR: 'UPDATE_ERROR',
            UPDATE_KEYWORDS: 'UPDATE_ERROR'
        }
    }
});

jest.mock('react-infinite-scroller');

function setup() {
    const history = createMemoryHistory('/searchpage');
    const location = { pathname: '/searchpage' };
    const props = {
        keywords: '',
        genresId: 0,
        movies: {
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0
          },
        genres: [],
        error: '',
        favourites: []
    };
    return <SearchPageView {...props} history={history} location={location} />;

}
describe('<SearchPage> Start Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})