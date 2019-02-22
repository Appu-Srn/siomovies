import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import logo from './NightMovie.jpg';

const Navbar = (props) => {

    return (
  

<nav className="navbar navbar-expand-lg navbar-light bg-light pull-right">
<a className="navbar-brand" href="\">
    <img src={logo} width="50" height="50" alt="" />
  </a>

  <a className="navbar-brand" href="\">SioMovies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Advanced Search</a>
          <a className="dropdown-item" href="#">Search by Year</a>
          <a className="dropdown-item" href="#">Search by Type</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/previous">Recent Searches</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Recent Searches
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Advanced Search</a>
          <a className="dropdown-item" href="#">Search by Year</a>
          <a className="dropdown-item" href="#">Search by Type</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/previous">Recent Searches</a>
        </div>
      </li>


    </ul>

  </div>
</nav>


    )
}
export default withRouter(Navbar)