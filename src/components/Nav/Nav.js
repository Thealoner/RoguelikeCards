import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <>
      <Link to="/" className="Nav-Link">Home</Link>
      <Link to="/playboard" className="Nav-Link">Playboard</Link>
    </>
  )
}

export default Nav;