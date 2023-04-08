import { receiveEmpl } from "./users";
import { receiveQuestions } from "./questions";
import { getInitialData } from "../util/api";

export function handleDataInitial() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveEmpl(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
