import React from 'react';
import ReactDOM from 'react-dom';
import { DetailPage } from './DetailPage';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store'
import { 
    MOCK_MOVIE_DATA,
    MOCK_INIT_STATE
} from 'Reducers/mockdata';
function setup() {
    const history = createMemoryHistory('/detailpage');
    const data = MOCK_MOVIE_DATA;
    const movie = {
        title: data.title,
        releaseDate: data.release_date,
        genres: [],
        poster: data.poster_path,
        overview: data.overview,
        rating: data.vote_average,
        votes: data.vote_count
    };
    const location = {
        pathname: '/detailpage',
        movie
    }
    const mockstore = configureStore([]);
    const store = mockstore(MOCK_INIT_STATE);
    return <DetailPage store={store} history={history} location={location} />;
}

describe('<DetailPage> Start Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})