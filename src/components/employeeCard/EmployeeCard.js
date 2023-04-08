import "./EmployeeCard.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const EmployeeCard = ({ question, author }) => {
  const dateconverter = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${formattedHours}:${formattedMinutes}${amOrPm} | ${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <div className="card-container">
      <div className="authorName">{question.author}</div>
      <p className="time">{dateconverter(question.timestamp)}</p>
      <Link to={"questions/" + question.id} style={{ display: "inline-block" }}>
        <button className="show-btn-div">Show</button>
      </Link>
    </div>
  );
};

export default connect()(EmployeeCard);
