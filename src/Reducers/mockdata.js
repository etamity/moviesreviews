export const MOCK_MOVIE_DATA = {
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

export const MOCK_INIT_STATE = {
    search: {
        loading: false,
        genres: [],
        filters: {
          genresId: -1,
          keywords: ''
        },
        movies: {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0
        },
        error: null,
      },
      app: {
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
    }
};