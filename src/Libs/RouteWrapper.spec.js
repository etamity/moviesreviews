import React from 'react';
import RouterWrapper from './RouterWrapper';
import { shallow } from 'enzyme';
import * as Pages from 'Pages';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store'
import { 
    MOCK_INIT_STATE
} from 'Reducers/mockdata';

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


function setup() {
    const mockstore = configureStore([]);
    const store = mockstore(MOCK_INIT_STATE);
    return <MemoryRouter initialEntries={['/random']}>
            <RouterWrapper store={store} root={{}} >
                {
                    Object.keys(Pages).map((name, index) => {
                        const Page = Pages[name];
                        return <Page key={index} className={name} />
                    })
                }
            </RouterWrapper>
        </MemoryRouter>;
}
describe('<RouteWrapper> Start Component Test', () => {
    it('Rhould renders page routes without crashing', () => {
        const div = document.createElement('div')
        const wrapper = shallow(setup());
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})