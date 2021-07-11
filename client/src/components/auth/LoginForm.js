import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <form className="ui form">
        <div className="ui grid">
          <div className="seven wide column">
            <div className="field">
              <label>Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="field">
              <label>Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <div className="ui fluid buttons">
              <button className="ui button primary" type="submit">
                Login
              </button>
              <div className="or" />
              <Link to="/register" className="ui button">
                Register
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
