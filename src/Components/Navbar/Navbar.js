import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';

/**
 * 
 * @param {*} props 
 * Nav bar Component
 */
const Navbar = (props) => {
  const avatar = props.user && <li>
    { <img src={props.user.avatar} />}
    <p>{props.user.username}</p>
  </li>
  return <div className="navbar">
    <ul>
      {
        props.navs && props.navs.map((item, index) => {
          return <li key={index} onClick={item.onClick}><a className={props.activeId === item.id ? 'active' : ''} href={item.url}>{item.label}</a></li>
        })
      }
    {avatar}
    </ul>
  </div>
}

Navbar.propTypes = {
  navs: PropTypes.array,
  activeId: PropTypes.number,
  user: PropTypes.object
}

export default Navbar;