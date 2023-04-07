import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewPoll.css";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

  const handleFirstOptionChange = (e) => {
    const value = e.target.value;
    setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
    const value = e.target.value;
    setSecondOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstOption, secondOption));
    navigate("/");
  };

  return (
    <div className="poll-div">
      <h3>Would You Rather</h3>
      <h6>Create Your Own Poll</h6>
      <form className="form-div" onSubmit={handleSubmit}>
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
              value={firstOption}
              onChange={handleFirstOptionChange}
              type="text"
              name="firstOption"
              id="firstOption"
              data-testid="firstOption"
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
              value={secondOption}
              onChange={handleSecondOptionChange}
              type="text"
              name="secondOption"
              id="secondOption"
              data-testid="secondOption"
              className="input"
              placeholder="Option Two"
            />
          </div>
        </div>

        <div className="submit-btn-poll">
          <button className="submit-poll" type="submit" data-testid="submit-poll">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
