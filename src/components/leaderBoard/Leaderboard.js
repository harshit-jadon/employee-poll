import { connect } from "react-redux";
import { useMemo } from "react";
import "./Leaderboard.css";

const Leaderboard = ({ employees }) => {

  const sortedUsers = useMemo(() => {
    return Object.values(employees).sort(
      (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
    );
  }, [employees]);

  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(({ id, avatarURL, name, answers, questions }) => (
            <tr key={id}>
              <td>
                <div className="employee-poll-details">
                  <img
                    className="img-details"
                    src={avatarURL}
                    alt="avatar-img"
                  />
                  <div>
                    <span>{name}</span>
                    <br />
                    {id}
                  </div>
                </div>
              </td>
              <td>{Object.keys(answers).length}</td>
              <td>{questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
