import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
);

export default Navbar;
