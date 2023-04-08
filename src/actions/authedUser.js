export const EMPLOYEE_USER = "EMPLOYEE_USER";
export const LOGOUT_EMPLOYEE = "LOGOUT_EMPLOYEE";

export function employeeUser(authedUser) {
  return {
    type: EMPLOYEE_USER,
    authedUser,
  };
}

export function logoutEmp() {
  return {
    type: LOGOUT_EMPLOYEE,
  };
}

export function loginToApp(username, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) => user.id === username && user.password === password
    );
    if (user) {
      return dispatch(employeeUser(user));
    }
  };
}

export function logoutApp() {
  return (dispatch) => {
    return dispatch(logoutEmp());
  };
}
