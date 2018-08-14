import React, { Component } from 'react';
import MovieCard from 'Components/MovieCard/MovieCard';
import { connect } from 'react-redux';
import { AppAction } from 'Reducers/app';
import './FavouritesPage.scss';
/**
 * Search page to search movies by keywords
 */
class FavouritesPageView extends Component {

    constructor(props) {
        super(props);
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
        const favourites = this.props.favourites;
        return <div className={'favouritespage'}>
            {favourites && favourites.map((movie, index) => {
                return <MovieCard key={index}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    rating={movie.vote_average}
                    overview={movie.overview}
                    favour={true}
                    onClick={() => {
                        this.showMovieDetail(movie);
                    }}
                    onButtonClick={() => {
                        if (this.props.favourites.includes(movie)) {
                            AppAction.removeFavourite(movie);
                        } else {
                            AppAction.appendFavourite(movie);
                        }
                    }}
                />
            })}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        favourites: state.app.favourites
    }
}

export const FavouritesPage = connect(
    mapStateToProps
)(FavouritesPageView);
