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
    <div className="main-container">
      <div className="type-questions">
        <h2>New Questions</h2>
        <ul>
          {questions.filter(unanswered).map((question) => (
            <li key={question.id}>
              <Card question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      </div>
      <div className="type-questions">
        <h2>Answered Questions</h2>
        <ul>
          {questions.filter(answered).map((question) => (
            <li key={question.id}>
              <Card question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
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
