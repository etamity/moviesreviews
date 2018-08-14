import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store'
import { combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'Reducers';
import { routerMiddleware } from 'react-router-redux';

jest.mock('Reducers/search.js');
jest.mock('Reducers/app.js');
jest.mock('Reducers/index.js');
function setup() {
    const history = createMemoryHistory('/searchpage');
    const middleware = routerMiddleware(history);
    const location = { pathname: '/searchpage' };
    const mockstore = configureStore(
        middleware
    );
    const store = mockstore(combineReducers({
        ...reducers,
        router: MemoryRouter
    }));

    return <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
            <AppContainer location={location}/>
        </MemoryRouter></Provider>;
}

describe('<AppContainer> Start Component Test', () => {
    it('renders without crashing', () => {

        const wrapper = setup();
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})