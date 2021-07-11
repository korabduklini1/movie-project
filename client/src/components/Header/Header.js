import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-3">
      <div className="ui secondary pointing menu">
        <NavLink exact to="/" className="item">
          Home
        </NavLink>
        <NavLink exact to="/movies" className="item">
          Movies
        </NavLink>

        <NavLink to="/movies/new" className="item">
          <i className="icon plus" />
          Add new movie
        </NavLink>

        <div className="right menu">
          <NavLink exact to="/login" className="item">
            Login
          </NavLink>
          <NavLink to="/register" className="item">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
