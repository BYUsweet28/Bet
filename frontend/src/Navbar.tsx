import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Nav bar with all the boostrap styling and links to each page
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/podcasts">
                  Podcasts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

// An export that allows the navbar function to be imported into App.tsx
export default Navbar;
