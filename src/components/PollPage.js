import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import "./PollPage.css";

const PollPage = ({ dispatch, authedUser, question, author }) => {
  const navigate = useNavigate();

  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

  console.log("XXX >>", hasVotedForOptionOne);
  console.log("YYY >>", hasVotedForOptionTwo);

  const handleOptionOne = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleOptionTwo = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  const calcPercentage = (option, question) => {
    const numberVotesTotal =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    switch (option) {
      case "optionOne":
        return (
          (question.optionOne.votes.length / numberVotesTotal) * 100 + " %"
        );
      case "optionTwo":
        return (
          (question.optionTwo.votes.length / numberVotesTotal) * 100 + " %"
        );
      default:
        return "";
    }
  };

  return (
    <div className="poll-page-dev">
      <h1 className="heading">Poll by {author.id}</h1>

      <div>
        <img className="img-pp" src={author.avatarURL} alt="Profile" />
      </div>

      <div>
        <h2>Would You Rather</h2>
      </div>

      <div className="select-answer">
        <button
          onClick={handleOptionOne}
          disabled={hasVoted}
          className={
            hasVotedForOptionOne && !hasVotedForOptionTwo
              ? "already-vote"
              : "button-div"
          }
        >
          <div>
            <p>{question.optionOne.text}</p>
            {!hasVoted && <p className="clickButton">Click</p>}
            {hasVoted && (
              <p>
                Votes: {question.optionOne.votes.length} (
                {calcPercentage("optionOne", question)})
              </p>
            )}
          </div>
        </button>

        <button
          onClick={handleOptionTwo}
          disabled={hasVoted}
          className={
            !hasVotedForOptionOne && hasVotedForOptionTwo
              ? "already-vote"
              : "button-div"
          }
        >
          <p>{question.optionTwo.text}</p>
          {!hasVoted && <p className="clickButton">Click</p>}
          {hasVoted && (
            <p>
              Votes: {question.optionTwo.votes.length} (
              {calcPercentage("optionTwo", question)})
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, question, author };
  } catch (e) {
    return <Navigate to="/404" />;
  }
};

export default connect(mapStateToProps)(PollPage);
