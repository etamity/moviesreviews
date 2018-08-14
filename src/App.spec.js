import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store'
import { combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'Reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';

function setup() {
    const history = createMemoryHistory('/searchpage');
    const middleware = routerMiddleware(history);
    const location = { pathname: '/searchpage' };
    const mockstore = configureStore(
        middleware
    );
    const store = mockstore(combineReducers({
        ...reducers,
        router: routerReducer
    }));
    return <Provider store={store}>
        <MemoryRouter initialEntries={['/random']}>
            <App location={location} />
        </MemoryRouter>
    </Provider>;
}
describe('<App> Start Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})