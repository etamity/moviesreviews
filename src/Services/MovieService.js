import themoviedb from 'Libs/themoviedb';
import { SearchAction } from 'Reducers/search';
import { AppAction } from 'Reducers/app';

const MovieService = {
	/**
	 * @param keywords The keyword you want to search
	 * @param genresId The genres Id you want to filter
	 * @param page The page number you want to load
	 */
	filterMovies: (keywords, genresId, page, append)=> {
		if (keywords) {
		  return MovieService.searchMovies(keywords, page, append);
		} else if (genresId >= 0) {
		  return MovieService.getMoviesByGenres(genresId, page, append);
		} else {
		  return MovieService.getMovies(Math.abs(page) || 1, append);
		}
	},
	/**
	 * Fetch TV shows genres
	 */
	getTVGenres: () => {
		return new Promise((resolve, reject) => {
			themoviedb.genres.getTvList({}, (data) => {
				const genres = JSON.parse(data).genres;
				SearchAction.updateGenres(genres);
				resolve(genres);
			},
				(error) => {
					AppAction.updateError(error.message);
					console.error(error);
					reject(error);
				})
		})
	},
	/**
	 * Fetch movie genres
	 */
	getMovieGenres: () => {
		return new Promise((resolve, reject) => {
			themoviedb.genres.getMovieList({}, (data) => {
				const genres = JSON.parse(data).genres;
				SearchAction.updateGenres(genres);
				resolve(genres);
			},
				(error) => {
					AppAction.updateError(error.message);
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param id Get movies by genres Id
	 * @param page Jump to page
	 */
	getMoviesByGenres: (id, page = 1, append) => {
		return new Promise((resolve, reject) => {
			themoviedb.genres.getMovies({ id, page }, (data) => {
				const movies = JSON.parse(data);
				if (append) {
					SearchAction.appendResults(movies);
				} else {
					SearchAction.updateResults(movies);
				}
	
				resolve(movies);
			},
				(error) => {
					AppAction.updateError(error.message);
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param page Jump to page
	 */
	getMovies: (page = 1, append) => {
		return new Promise((resolve, reject) => {
			themoviedb.discover.getMovies({ page }, (data) => {
				const movies = JSON.parse(data);
				if (append) {
					SearchAction.appendResults(movies);
				} else {
					SearchAction.updateResults(movies);
				}
				resolve(movies);
			},
				(error) => {
					AppAction.updateError(error.message);
					console.error(error);
					reject(error);
				})
		})
	},

	/**
	 * @param keywords Search movies by keywords
	 * @param page Jump to page
	 */
	searchMovies: (keywords, page = 1, append) => {
		return new Promise((resolve, reject) => {
			const queryObj = (keywords && { query: keywords, page }) || {};
			themoviedb.search.getMovie(queryObj, (data) => {
				const movies = JSON.parse(data);
				if (append) {
					SearchAction.appendResults(movies);
				} else {
					SearchAction.updateResults(movies);
				}
				resolve(movies);
			},
				(error) => {
					AppAction.updateError(error.message);
					console.error(error);
					reject(error);
				})
		})
	},
}

export default MovieService;