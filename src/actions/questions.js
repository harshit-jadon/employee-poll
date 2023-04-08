import { saveQuestion, saveQuestionAnswer } from "../util/api";
import { addAnswerEmpl, addQuestionEmpl } from "./users";

export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const ADD_ONLY_QUESTION = "ADD_ONLY_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";


function addQuestionAnswer(author, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    author,
    qid,
    answer,
  };
}

function addOnlyQuestion(question) {
  return {
    type: ADD_ONLY_QUESTION,
    question,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}


export function addAnswerFnc(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser.id, questionId, answer).then(() => {
      dispatch(addQuestionAnswer(authedUser.id, questionId, answer));
      dispatch(addAnswerEmpl(authedUser.id, questionId, answer));
    });
  };
}

export function addQuestionFnc(firstOption, secondOption) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion(firstOption, secondOption, authedUser).then(
      (question) => {
        dispatch(addOnlyQuestion(question));
        dispatch(addQuestionEmpl(question));
      }
    );
  };
}


