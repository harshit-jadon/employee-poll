import "./NewPollPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addQuestionFnc } from "../../actions/questions";

const NewPollPage = ({ addQuestionFnc }) => {
  
  const [optOne, setOptOne] = useState("");
  const [optTwo, setOptTwo] = useState("");

  const navigate = useNavigate();

  const submitNewPoll = (e) => {
    addQuestionFnc(optOne, optTwo);
    navigate("/");
    e.preventDefault();
  };

  return (
    <div className="poll-div" >
      <h3  data-testid="poll-div-comp">Would You Rather</h3>
      <h6>Create Your Own Poll</h6>
      <form className="form-div" onSubmit={submitNewPoll}>
        <div className="label-input-dev">
          <label
           data-testid="label-first-option"
            className="label"
            htmlFor="firstOption"
          >
            First Option
          </label>
          <div>
            <input
            data-testid="input-first-option"
              type="text"
              id="firstOption"
              value={optOne}
              onChange={(e) => setOptOne(e.target.value)}
              className="input"
              placeholder="Option One"
            />
          </div>
        </div>

        <div className="label-input-dev">
          <label htmlFor="secondOption" data-testid="label-second-option">
            Second Option
          </label>
          <div>
            <input
              type="text"
              id="secondOption"
              data-testid="input-second-option"
              value={optTwo}
              onChange={(e) => setOptTwo(e.target.value)}
              className="input"
              placeholder="Option Two"
            />
          </div>
        </div>

        <div className="submit-btn-poll">
          <button
            data-testid="submit-button"
            className="submit-poll"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addQuestionFnc,
};

export default connect(null, mapDispatchToProps)(NewPollPage);
