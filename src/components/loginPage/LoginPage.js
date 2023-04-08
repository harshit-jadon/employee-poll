  import { useState } from "react";
  import "./LoginPage.css";
  import { useLocation, Navigate } from 'react-router-dom';
  import LoginPageSvg from "../../images/employee1.png";
  import { connect } from "react-redux";
  import { handleLogin } from "../../actions/authedUser";

  const LoginPage = ({login, dispatch }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { search } = useLocation();

    const handleSubmit = (e) => {
      setUsername("");
      setPassword("");
      dispatch(handleLogin(username, password));
      e.preventDefault();
    };

    if (login) {
      const params = new URLSearchParams(search);
      const redirectUrl = params.get("redirectTo");
      return <Navigate to={redirectUrl || "/"} />;
    }

    return (
      <div className="head-container" >
        <h1 data-testid="login-header" className="header">Employee Polls</h1>
        <img src={LoginPageSvg} alt="login-page-svg" />
        <h1>Log In</h1>
        <form onSubmit={handleSubmit} className="form-div">
          <div className="div-container">
            <label htmlFor="user" className="label-box">
              User
            </label>
            <div>
              <input
               data-testid="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
               
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
                data-testid="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              
                className="input-box"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" data-testid="submit-button" className="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    login: state.authedUser,
  });

  export default connect(mapStateToProps)(LoginPage);
