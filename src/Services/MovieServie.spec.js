import MovieService from './MovieService';
import { SearchAction } from 'Reducers/search/actions';
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
        },
        SearchAction: {
            updateResults: jest.fn(),
            resetResults: jest.fn(),
            appendResults: jest.fn(),
            updateLoading: jest.fn(),
            updateGenres: jest.fn(),
            updateKeywords: jest.fn(),
            updateGenresId: jest.fn()
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
        },
        AppAction: {
            updateFavourites: jest.fn(),
            appendFavourite: jest.fn(),
            removeFavourite: jest.fn(),
            updateError: jest.fn()
        }
    }
});

describe('[MovieServie] Start Service Test', () => {
    it('getMovieGenres() Should return an array', () => {
        expect.assertions(1);
        return expect(MovieService.getMovieGenres().then(data => Array.isArray(data))).resolves.toBe(true);
    });

    it('getMovieGenres() Should return an object', () => {
        expect.assertions(1);
        return expect(MovieService.getMoviesByGenres(12).then(data => typeof data)).resolves.toBe('object');
    });

    it('getMovies() Should return an object with certain structure', () => {
        expect.assertions(12);
        return MovieService.getMovies().then(data => {
            expect(data.hasOwnProperty('page')).toBe(true);
            expect(data.hasOwnProperty('total_pages')).toBe(true);
            expect(data.hasOwnProperty('total_results')).toBe(true);
            expect(data.hasOwnProperty('results')).toBe(true);
            const movie = data.results[0];
            expect(movie.hasOwnProperty('title')).toBe(true);
            expect(movie.hasOwnProperty('release_date')).toBe(true);
            expect(movie.hasOwnProperty('genre_ids')).toBe(true);
            expect(movie.hasOwnProperty('poster_path')).toBe(true);
            expect(movie.hasOwnProperty('overview')).toBe(true);
            expect(movie.hasOwnProperty('vote_average')).toBe(true);
            expect(movie.hasOwnProperty('vote_count')).toBe(true);
            expect(movie.hasOwnProperty('id')).toBe(true);
        });
    });

    it('searchMovies() Should return an object', () => {
        expect.assertions(1);
        return expect(MovieService.searchMovies('alien').then(data => typeof data)).resolves.toBe('object');
    });
})