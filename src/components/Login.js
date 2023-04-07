import { useState } from "react";
import "./Login.css"
import LoginPageSvg from "../images/employee1.png";

const Login = () => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="head-container">
      <h1> Employee Polls</h1>
      <img src={LoginPageSvg} alt="login-page-svg"></img>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="form-div">
        <div className="div-container">
          <label className="label-box" htmlFor="username">User</label>
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
          <label
            htmlFor="password"
            className="label-box"
          >
            Password
          </label>
          <div>
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
          <button type="submit" data-testid="submit">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
