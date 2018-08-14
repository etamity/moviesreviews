import React from 'react';
import ReactDOM from 'react-dom';
import { DetailPageView } from './DetailPage';
import { createMemoryHistory } from 'history';


function setup() {
    const history = createMemoryHistory('/detailpage');
    const data = {
        adult: false,
        backdrop_path: "/dfNrZ82poQ8blHWJreIv6JZQ9JA.jpg",
        genre_ids: [27, 878],
        id: 348,
        original_language: "en",
        original_title: "Alien",
        overview:
            "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
        popularity: 23.561,
        poster_path: "/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg",
        release_date: "1979-05-25",
        title: "Alien",
        video: false,
        vote_average: 8,
        vote_count: 6108
    };

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
    return <DetailPageView genres={[]} history={history} location={location} />;
}

describe('<DetailPage> Start Component Test', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})