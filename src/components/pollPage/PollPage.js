import React from "react";
import "./PollPage.css";
import { connect, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addAnswerFnc } from "../../actions/questions";

const PollPage = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const authedUser = props.authedUser;
  const questions = props.questions;
  const users = props.users;

  const questionss = Object.values(questions).find(
    (question) => question.id === id
  );

  const voteOptionOne =
    questionss?.optionOne?.votes.indexOf(authedUser?.id) !== -1;

  const voteOptionTwo =
    questionss?.optionTwo?.votes.indexOf(authedUser?.id) !== -1;
    
  const hasVoted = voteOptionOne || voteOptionTwo;


  const optionOneSelected = (e) => {
    dispatch(addAnswerFnc(questionss?.id, "optionOne"));
    e.preventDefault();
  };

  const optionTwoSelected = (e) => {
    dispatch(addAnswerFnc(questionss?.id, "optionTwo"));
    e.preventDefault();
  };

  if(!questionss) return <Navigate to='/404'/>

  const userss = Object.values(users).find(
    (user) => user.id === questionss.author
  );

  const percentageCalculate = (option, questions) => {
    const { optionOne, optionTwo } = questions;
    const numberVotesTotal = optionOne.votes.length + optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return `${((optionOne.votes.length / numberVotesTotal) * 100).toFixed(
          2
        )}%`;
      case "optionTwo":
        return `${((optionTwo.votes.length / numberVotesTotal) * 100).toFixed(
          2
        )}%`;
      default:
        return "";
    }
  };

  return (
    <div className="poll-page-dev">
      <h1 className="heading">Poll by {userss?.id}</h1>
      <div>
        <img className="img-pp" src={userss?.avatarURL} alt="Profile" />
      </div>
      <div>
        <h2>Would You Rather</h2>
      </div>
      <div className="select-answer">
        <button
          onClick={optionOneSelected}
          disabled={hasVoted}
          className={
            voteOptionOne && !voteOptionTwo ? "already-vote" : "button-div"
          }
        >
          <div>
            <p>{questionss?.optionOne?.text}</p>
            {!hasVoted && <p className="clickButton">Click</p>}
            {hasVoted && (
              <p>
                Votes: {questionss?.optionOne?.votes?.length} (
                {percentageCalculate("optionOne", questionss)})
              </p>
            )}
          </div>
        </button>
        <button
          onClick={optionTwoSelected}
          disabled={hasVoted}
          className={
            !voteOptionOne && voteOptionTwo ? "already-vote" : "button-div"
          }
        >
          <p>{questionss?.optionTwo?.text}</p>
          {!hasVoted && <p className="clickButton">Click</p>}
          {hasVoted && (
            <p>
              Votes: {questionss?.optionTwo?.votes?.length} (
              {percentageCalculate("optionTwo", questionss)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser,
    users: state.users,
    questions: state.questions,
  };
};

export default connect(mapStateToProps)(PollPage);
