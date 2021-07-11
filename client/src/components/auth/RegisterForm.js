import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="RegisterForm">
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

            <div className="field">
              <label>Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>

            <div className="ui fluid buttons">
              <button className="ui button primary" type="submit">
                Register
              </button>
              <div className="or" />
              <Link to="/login" className="ui button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
