import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenresLabels from 'Components/GenresLabels/GenresLabels';
import { connect } from 'react-redux';
import './DetailPage.scss';

/**
 * 
 * @param {*} props 
 * Detail page to show movie detail information
 */
const DetailPageView = (props) => {
    const movie = (props.location && props.location.movie) || JSON.parse(localStorage.getItem('movie_store'));

    // If movie object doesn't exist, go back to search page

    if (!movie) {
        props.history.push({
            pathname: '/searchpage',
        });
        return <div />;
    }

    /**
     * Goback to last page
     */
    function goBack() {
        window.scrollTo(0, 0);
        props.history.push({
            pathname: '/searchpage',
        });
    }

    const releaseYear = (movie.releaseDate && movie.releaseDate.split('-')[0]) || 'Unknow';

    
    return <div className={'detailpage'}>
        <div className="detailpage-panel">
            <div className="detailpage-thumbnail">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} alt={movie.title} />
            </div>
            <div className="detailpage-info">
                <h2 className="detailpage-title">{movie.title}<span>({releaseYear})</span></h2>
                <p>Votes: {movie.votes}</p>
                <p>Rates: {movie.rating}</p>
                <p className="detailpage-overview">{movie.overview}</p>
                <hr />
                <label>Genres:</label>
                <GenresLabels genres={movie.genres} />
                <button className="go-back" onClick={goBack}>BACK</button>
            </div>
        </div>
    </div>
}


DetailPageView.propTypes = {
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.array,
    poster: PropTypes.string,
    votes: PropTypes.number,
    rating: PropTypes.number,
    overview: PropTypes.string,
}

const mapStateToProps = state => {
    return {
      genres: state.search.genres
    }
  }
  
  export const DetailPage = connect(
    mapStateToProps
  )(DetailPageView);
  