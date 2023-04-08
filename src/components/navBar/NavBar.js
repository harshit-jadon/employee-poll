import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutApp } from "../../actions/authedUser";

const NavBar = ({ employeeId, employeeAvatar, dispatch }) => {
  
  const logoutEmployee = (e) => {
    dispatch(logoutApp());
    e.preventDefault();
  };

  return (
    <nav className="nav-bar" >
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
          <img className="pfl-img" src={employeeAvatar} alt="emloyeeAvatar"></img>
          <span className="span" data-testid="employee-id">
            {employeeId}
          </span>
        </div>
        <button className="logoutbutton" onClick={logoutEmployee}>
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  employeeId: state?.authedUser?.id,
  employeeAvatar: state?.authedUser?.avatarURL,
});

export default connect(mapStateToProps)(NavBar);
