import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <section className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">

          <li className="nav-item">
          <Link className="nav-link" to="/Profile">Profile</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/LogIn">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Forum">Forum</Link>
            </li>

          </ul>
        </section>
    </nav>
  )
}

export default Navbar
