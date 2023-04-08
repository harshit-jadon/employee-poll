import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = React.memo(({ children, login }) => {
  const location = useLocation();
  const redirectUrl = location.pathname + location.search;

    return login ? (
      children
    ) : (
      <Navigate to={`/login?redirectTo=${redirectUrl}`} />
    );
  });

const mapStateToProps = (state) => {
  const { authedUser } = state;
  return { login: !!authedUser };
};

export default connect(mapStateToProps)(PrivateRoute);
