import "./NewPollPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";

const NewPollPage = ({ handleAddQuestion }) => {
  
  const [optOne, setOptOne] = useState("");
  const [optTwo, setOptTwo] = useState("");

  const navigate = useNavigate();

  const submitNewPoll = (e) => {
    handleAddQuestion(optOne, optTwo);
    navigate("/");
    e.preventDefault();
  };

  return (
    <div className="poll-div">
      <h3>Would You Rather</h3>
      <h6>Create Your Own Poll</h6>
      <form className="form-div" onSubmit={submitNewPoll}>
        <div className="label-input-dev">
          <label
            className="label"
            htmlFor="firstOption"
            data-testid="firstOptionLabel"
          >
            First Option
          </label>
          <div>
            <input
              type="text"
              id="firstOption"
              data-testid="firstOption"
              value={optOne}
              onChange={(e) => setOptOne(e.target.value)}
              className="input"
              placeholder="Option One"
            />
          </div>
        </div>

        <div className="label-input-dev">
          <label htmlFor="secondOption" data-testid="secondOptionLabel">
            Second Option
          </label>
          <div>
            <input
              type="text"
              id="secondOption"
              data-testid="secondOption"
              value={optTwo}
              onChange={(e) => setOptTwo(e.target.value)}
              className="input"
              placeholder="Option Two"
            />
          </div>
        </div>

        <div className="submit-btn-poll">
          <button
            className="submit-poll"
            type="submit"
            data-testid="submit-poll"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  handleAddQuestion,
};

export default connect(null, mapDispatchToProps)(NewPollPage);
