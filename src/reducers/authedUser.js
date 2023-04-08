import { LOGOUT_EMPLOYEE, EMPLOYEE_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case EMPLOYEE_USER:
      return action.authedUser;
    case LOGOUT_EMPLOYEE:
      return null;
    default:
      return state;
  }
}
