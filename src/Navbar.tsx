import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <section className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
        
          {location.pathname === "/Forum" && (
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Profile">Profile</Link>
            </li>
          )}

          {location.pathname === "/Profile" && (
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Forum">Forum</Link>
            </li>
          )}

          {
            (location.pathname === "/Forum" || location.pathname === "/Profile") && (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/LogIn">Signout</Link>
              </li>
            )
          }
        </ul>
      </section>
    </nav>
  )
}

export default Navbar;
