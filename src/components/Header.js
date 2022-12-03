import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Favorite List</Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/">Favorite List</Link>
            </li>
            <li>
              <Link to="/watched">Favorite</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + add
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
