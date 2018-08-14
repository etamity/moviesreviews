import React from 'react';
import PropTypes from 'prop-types';
import './GenresMenu.scss';

/**
 * 
 * @param {*} props 
 * Nav bar Component
 */
const GenresMenu = (props) => {
  return <div className="genresmenu">
    <ul>
      {
        props.genres && props.genres.map((item, index) => {
          return <li key={index} onClick={item.onClick}><a className={ props.activeId === item.id ? 'active' : ''} href={item.url}>{item.label}</a></li>
        })
      }
      {props.rightComponent}
    </ul>
  </div>
}

GenresMenu.propTypes = {
  genres: PropTypes.array,
  activeId: PropTypes.number
}

export default GenresMenu;