import React from 'react';
import ReactDOM from 'react-dom';
import GenresMenu from './GenresMenu';
import { shallow } from 'enzyme';

describe('<GenresMenu> Start Component Test', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GenresMenu />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Active class will be appeneded when activeId match nav id', () => {
        const wrapper = shallow(<GenresMenu
            genres={[
                {
                    id: 0,
                    label: 'Home'
                },
                {
                    id: 1,
                    label: 'Movie'
                }
            ]}
            activeId={1}
        ></GenresMenu>);

        expect(wrapper.find('.active').length).toBe(1);
    });

    it('Active class will be appeneded when activeId match nav id', () => {
        const wrapper = shallow(<GenresMenu
            genres={[
                {
                    id: 0,
                    label: 'Home'
                },
                {
                    id: 1,
                    label: 'Movie'
                }
            ]}
            activeId={-1}
            ></GenresMenu>);

        expect(wrapper.find('.active').length).toBe(0);
    });

    it('Should only render two nav items', () => {
        const wrapper = shallow(<GenresMenu 
            genres={[
            {
                id: 0,
                label: 'Home'
            },
            {
                id: 1,
                label: 'Movie'
            }
        ]}
            activeId={1}></GenresMenu>);
        expect(wrapper.find('li').length).toBe(2);
    });
})