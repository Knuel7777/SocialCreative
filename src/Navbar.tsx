import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <section className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/LogIn">Login</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/Forum">Forum</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/Profile">Profile</Link>
          </li>

        </ul>
      </section>
    </nav>
  )
}

export default Navbar
