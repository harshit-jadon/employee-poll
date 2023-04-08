export const ADD_QUESTION_EMPL = "ADD_QUESTION_EMPL";
export const ADD_ANSWER_EMPL = "ADD_ANSWER_EMPL";
export const RECEIVE_EMPL = "RECEIVE_EMPL";

export function addQuestionEmpl({ author, id }) {
  return {
    type: ADD_QUESTION_EMPL,
    author,
    qid: id,
  };
}

export function addAnswerEmpl(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_EMPL,
    authedUser,
    qid,
    answer,
  };
}

export function receiveEmpl(users) {
  return {
    type: RECEIVE_EMPL,
    users,
  };
}