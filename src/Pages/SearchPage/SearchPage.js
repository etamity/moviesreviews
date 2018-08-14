import React, { Component } from 'react';
import MovieCard from 'Components/MovieCard/MovieCard';
import Loader from 'Components/Loader/Loader';
import ScrollerContainer from 'react-infinite-scroller';
import MovieService from 'Services/MovieService';
import { connect } from 'react-redux';
import { AppAction } from 'Reducers/app/actions';

import './SearchPage.scss';
/**
 * Search page to search movies by keywords
 */
export class SearchPageView extends Component {

  constructor(props) {
    super(props);
    this.page = 1;
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  /**
   * Load next page data
   */
  loadNextPage() {
    this.page = this.page + 1;
    MovieService.filterMovies(this.props.keywords, this.props.genresId, this.page, true);
  }

  /**
   * 
   * @param {*} data raw movie data
   * Navigate to movie detail page
   */
  showMovieDetail(data) {
    window.scrollTo(0, 0);
    const movie = {
      title: data.title,
      releaseDate: data.release_date,
      genres: data.genre_ids && data.genre_ids.map(id => {
        const genresName = this.props.genres.find(item => item.id === id);
        return {
          id,
          name: genresName && genresName.name
        }
      }),
      poster: data.poster_path,
      overview: data.overview,
      rating: data.vote_average,
      votes: data.vote_count
    };
    localStorage.setItem('movie_store', JSON.stringify(movie));
    this.props.history.push({
      pathname: '/detailpage',
      movie
    });
  }

  render() {
    const movies = this.props.movies;
    const results = movies.results;
    const error = results && results.length === 0 ? 'No Movies Found!' : this.props.error;
    return <div className={'searchpage'}>
      <ScrollerContainer
        pageStart={1}
        loadMore={() => {
          this.loadNextPage()
        }}
        hasMore={movies.page < movies.total_pages}
        loader={<Loader key={0}></Loader>}>
        {results && results.map((movie, index) => {
          return <MovieCard key={index}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            overview={movie.overview}
            favour={this.props.favourites.includes(movie)}
            onClick={() => {
              this.showMovieDetail(movie);
            }}
            onButtonClick={(e) => {
              if (this.props.favourites.includes(movie)) {
                AppAction.removeFavourite(movie);
              } else {
                AppAction.appendFavourite(movie);
              }
            }}
          />
        })}
      </ScrollerContainer>

      {error && <div className="searchpage-messagebox">
        {error}
      </div>}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    keywords: state.search.filters.keywords,
    genresId: state.search.filters.genresId,
    movies: state.search.movies,
    genres: state.search.genres,
    error: state.app.error,
    favourites: state.app.favourites
  }
}

export const SearchPage = connect(
  mapStateToProps
)(SearchPageView);
