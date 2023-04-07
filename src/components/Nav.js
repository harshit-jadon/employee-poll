import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authedUser";
import "./Nav.css";

const Nav = ({ dispatch, authedUserId, authedUserAvatar }) => {
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
        <div className="nav-bar-detail">
          <img className="pfl-img" src={authedUserAvatar} alt="userImage"></img>
          <span className="span" data-testid="user-information">
            {authedUserId}
          </span>
        </div>
        <button className="logoutbutton" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
  authedUserAvatar: authedUser.avatarURL,
});

export default connect(mapStateToProps)(Nav);
