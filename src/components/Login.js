import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginPageSvg from "../images/employee1.png";
import "./Login.css";
import { useState } from "react";
import { handleLogin } from "../actions/authedUser";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="head-container">
      <h1> Employee Polls</h1>
      <img src={LoginPageSvg} alt="login-page-svg"></img>
      <h1 data-testid="login-heading">Log In</h1>
      <form onSubmit={handleSubmit} className="form-div">
        <div className="div-container">
          <label htmlFor="username" className="label-box">
            User
          </label>
          <div>
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              name="username"
              id="username"
              data-testid="username"
              className="input-box"
              placeholder="User"
            />
          </div>
        </div>
        <div className="div-container">
          <label htmlFor="password" className="label-box">
            Password
          </label>
          <div className="mt-1">
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
              data-testid="password"
              className="input-box"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" data-testid="submit" className="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);
