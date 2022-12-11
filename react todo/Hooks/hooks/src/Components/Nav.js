import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Hooks
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/login">Login</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/post">Post</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/todo">Todo</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/product">Product</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
