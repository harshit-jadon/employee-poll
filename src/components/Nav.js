import { NavLink } from "react-router-dom";
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
        <NavLink
          className="link"
          to="/"
          activeclassName="active"
        >
          Home
        </NavLink>
        <NavLink
          className="link"
          to="/leaderboard"
          activeclassName="active"
        >
          Leaderboard
        </NavLink>
        <NavLink className="link" to="/new" activeclassName="active">
          New
        </NavLink>
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
