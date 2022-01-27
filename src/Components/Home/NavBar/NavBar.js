import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo.png'
import './NavbBar.css'
function NavBar() {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand  " href="#">
          <img className="w-25" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
              <Link to="/">Home</Link>
              </li>
            </ul>
            <form className="">
              
              {!user.email ? (
                <Link to="/login">
                  <button className="btn-navbar">
                  <i class="fas fa-user-circle"></i> Login
                  </button>
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="btn-navbar"
                >
                 <i class="fas fa-user-circle"></i> logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
