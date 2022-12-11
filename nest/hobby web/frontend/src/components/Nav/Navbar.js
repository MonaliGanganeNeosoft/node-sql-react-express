import React from "react";
import { Link } from "react-router-dom";
//#6200ea deep-purple accent-4
function Navbar() {
  return (
    <nav className="#aa00ff purple accent-4">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          MoniPro
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
