import { connect } from "react-redux";
import "./Dashboard.css";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {
  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div className="main-container" data-testid="heading">
      <div className="type-questions">
        <h2>New Questions</h2>
        <div className="card-container-div">
          {questions.filter(unanswered).map((question) => (
            <div key={question.id}>
              <Card question={question} author={users[question.author]} />
            </div>
          ))}
        </div>
      </div>
      <div className="type-questions">
        <h2>Done</h2>
        <div className="card-container-div">
          {questions.filter(answered).map((question) => (
            <div key={question.id}>
              <Card question={question} author={users[question.author]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
