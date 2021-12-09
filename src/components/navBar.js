import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calc">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quotes</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
