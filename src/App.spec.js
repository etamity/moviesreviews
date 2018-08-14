import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import { 
    MOCK_INIT_STATE
} from 'Reducers/mockdata';

function setup() {
    const history = createMemoryHistory('/searchpage');
    const location = { pathname: '/searchpage' };
    const mockstore = configureStore([]);
    const store = mockstore(MOCK_INIT_STATE);
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