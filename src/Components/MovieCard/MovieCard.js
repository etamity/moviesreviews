import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

/**
 * 
 * @param {*} props 
 * Movie Card Component
 */
const MovieCard = (props) => {
    const overview = (props.overview && props.overview.length > 200) ? props.overview.substring(0, 200) + ' ...' : props.overview;
    const label = props.favour ? 'Remove Favourite' : 'Add Favourite';
    const thumbnail = props.poster && `https://image.tmdb.org/t/p/w500${props.poster}`;
    return <div className={`moviecard ${props.favour ? 'favour-add' : ''}`}>
        <div className="moviecard-thumbnail">
            <img src={thumbnail} alt={props.title} />
        </div>
        <div className="moviecard-info" onClick={props.onClick}>
            <p className="moviecard-rating">Rates: {props.rating}</p>
            <div className="moviecard-overview">{overview}</div>
        </div>
        <div className="moviecard-actions">
            <button className={props.favour ? 'red' : 'blue'} onClick={props.onButtonClick}>{label}</button>
        </div>
    </div>

}

MovieCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    poster: PropTypes.string,
    overview: PropTypes.string,
    rating: PropTypes.number,
    onClick: PropTypes.func,
    onButtonClick: PropTypes.func,
    favour: PropTypes.bool
}

export default MovieCard;