import React from 'react';
import { Link } from 'react-router-dom';
import MyList from '../MyListPage/MyListPage';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Read it</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <Link to="/mylist">
          <a>My List</a>
        </Link>
      </ul>
      <div className="burger">

      </div>
    </nav>
  );
}
