import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import "./Nav.css";
import LoginPageSvg from "../images/employee1.png";

const Nav = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-link">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/leaderboard">
          Leaderboard
        </Link>
        <Link className="link" to="/new">
          New
        </Link>
      </div>
      <div className="nav-bar-detail">
        <span className="span" data-testid="user-information">
          <img src={LoginPageSvg} alt="userImage"></img> {authedUserId}
        </span>
        <button className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
