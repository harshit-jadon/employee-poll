import {
  ADD_ANSWER_EMPL,
  ADD_QUESTION_EMPL,
  RECEIVE_EMPL,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_EMPL:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_EMPL:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION_EMPL:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    default:
      return state;
  }
}
