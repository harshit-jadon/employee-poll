import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../src/components/loginPage/LoginPage";
import PrivateRoute from "../src/components/privateRoute/PrivateRoute";
import EmployeeDashboard from "../src/components/employeeDashboard/EmployeeDashboard";
import NavBar from "../src/components/navBar/NavBar";
import NewPollPage from "../src/components/newPollPage/NewPollPage";
import Leaderboard from "./components/leaderBoard/Leaderboard";
import PollPage from "../src/components/pollPage/PollPage";
import Error404 from "./components/404";
import { handleDataInitial } from "./actions/shared";

function App({ dispatch, login }) {

  useEffect(() => {
    dispatch(handleDataInitial());
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
          path="/add"
          exact
          element={
            <PrivateRoute>
              <NewPollPage />
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

        <Route path="/404" exact element={<Error404 />} />
        <Route path="/*" exact element={<Error404 />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  login: authedUser,
});

export default connect(mapStateToProps)(App);
