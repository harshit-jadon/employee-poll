import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author }) => {
  return (
    <Link to={"questions/" + question.id}>
      <div>
        <div>
          <img src={author?.avatarURL} alt="Author" />
        </div>
        <div>
          <div>
            {question.author}
          </div>
          <p>
            {new Date(question.timestamp).toDateString()}
          </p>
          <p>Show</p>
        </div>
      </div>
    </Link>
  );
};

export default connect()(Card);

/*
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
 */