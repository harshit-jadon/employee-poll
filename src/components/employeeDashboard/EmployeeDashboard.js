import "./EmployeeDashboard.css";
import { connect } from "react-redux";
import EmployeeCard from "../employeeCard/EmployeeCard";
import { useState } from "react";

const EmployeeDashboard = ({ employeeUser, questions, users }) => {
  const [showNewQuestions, setShowNewQuestions] = useState(true);
  const [newQuestionsDisabled, setNewQuestionsDisabled] = useState(true);
  const [doneQuestionsDisabled, setDoneQuestionsDisabled] = useState(false);

  const notDone = (elem) =>
    !elem.optionOne.votes.includes(employeeUser.id) &&
    !elem.optionTwo.votes.includes(employeeUser.id);

  const alreadyDone = (data) =>
    data.optionOne.votes.includes(employeeUser.id) ||
    data.optionTwo.votes.includes(employeeUser.id);

  const handleToggle = () => {
    setShowNewQuestions(!showNewQuestions);
    setNewQuestionsDisabled(!newQuestionsDisabled);
    setDoneQuestionsDisabled(!doneQuestionsDisabled);
  };

  return (
    <div className="main-container" data-testid="employee-dashboard">
      <div className="toggle-buttons">
        <button
          onClick={handleToggle}
          className={`${showNewQuestions ? "active selectedButton" : ""} unanswered-button`}
          disabled={newQuestionsDisabled}
        >
          NEW
        </button>
        <button
          onClick={handleToggle}
          className={`${!showNewQuestions ? "active selectedButton" : ""} answered-button`}
          disabled={doneQuestionsDisabled}
        >
          DONE 
        </button>
      </div>
      {showNewQuestions ? (
        <div className="type-questions">
          <h2>New Questions</h2>
          <div className="card-container-div">
            {questions.filter(notDone).map((el) => (
              <div key={el.id}>
                <EmployeeCard author={users[el.author]} question={el} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="type-questions">
          <h2>Done</h2>
          <div className="card-container-div">
            {questions.filter(alreadyDone).map((question) => (
              <div key={question.id}>
                <EmployeeCard
                  author={users[question.author]}
                  question={question}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  employeeUser: state.authedUser,
  questions: Object.values(state.questions).sort(
    (el, ele) => ele.timestamp - el.timestamp
  ),
  users: state.users,
});

export default connect(mapStateToProps)(EmployeeDashboard);
