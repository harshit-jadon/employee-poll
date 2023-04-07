import { connect } from "react-redux";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ question, author }) => {

  const dateconverter = (timestamp)=>{
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
  }

  return (
    <div className="card-container">
      {/* <div>
          <img src={author?.avatarURL} alt="Author" />
        </div> */}
      <div className="authorName">{question.author}</div>
      <p className="time">{dateconverter(question.timestamp)}</p>
      <div className="show-btn-div">
      <Link className="showbutton" to={"questions/" + question.id}>
       Show
      </Link>
      </div>
     
    </div>
  );
};

export default connect()(Card);
