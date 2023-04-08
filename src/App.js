import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../src/components/loginPage/LoginPage";
import PrivateRoute from "../src/components/privateRoute/PrivateRoute";
import EmployeeDashboard from "../src/components/employeeDashboard/EmployeeDashboard";

import NavBar from "../src/components/navBar/Nav";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import Leaderboard from "./components/Leaderboard";
import Error404 from "./components/404";

import { handleInitialData } from "./actions/shared";

function App({ dispatch, login }) {
  
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div>
      {login && <NavBar />}
      <Routes>
        <Route path="/login" exact element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <EmployeeDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <PrivateRoute>
              <PollPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/new"
          exact
          element={
            <PrivateRoute>
              <NewPoll />
            </PrivateRoute>
          }
        />
        <Route path="/404" exact element={<Error404 />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  login: authedUser,
});

export default connect(mapStateToProps)(App);
