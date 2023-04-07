import { connect } from "react-redux";
import "./Leaderboard.css";
import LoginPageSvg from "../images/employee1.png";

const Leaderboard = ({ users }) => {
  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>
              Users
            </th>
            <th>
              Answered
            </th>
            <th>
              Created
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="employee-poll-details">
                  <img className="img-details" src={LoginPageSvg} alt="img"></img>
                  <div><span>{user.name}</span>
                <br />
                {user.id}</div>
                </div>
                
              </td>
              <td>
                {Object.keys(user.answers).length}
              </td>
              <td>
                {user.questions.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
