import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  bg-light">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/gallary" activeClassName="active">
            Gallary
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </nav>
      </>
    );
  }
}

export default Nav;
