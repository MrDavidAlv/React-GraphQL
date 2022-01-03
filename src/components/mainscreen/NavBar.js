import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='mynavbar'> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4">
        <Link className="navbar-brand" to="/Home">
          StartWars 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Planets">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Peoples">
                Peoples
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
