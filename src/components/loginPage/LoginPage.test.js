import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";
import { store } from "../../store";
import { handleInitialData } from "../../actions/shared";
import LoginPage from "./LoginPage";

describe("Login page component", () => {
  it("should render the login page component", () => {
    const loginPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
    expect(loginPage).toBeDefined();
    expect(loginPage).toMatchSnapshot();
  });

  it("redirects to the redirectUrl when login is successful", () => {
    const redirectUrl = "/dashboard";
    const search = `?redirectTo=${redirectUrl}`;

    const loginPage = render(
      <Provider store={store}>
        <BrowserRouter initialEntries={[`/login${search}`]}>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    expect(loginPage.queryByText("Log In already")).not.toBeInTheDocument();
    expect(loginPage.queryByLabelText("User")).not.toBeInTheDocument();
    expect(loginPage.queryByLabelText("Password")).not.toBeInTheDocument();
    expect(loginPage.queryByTestId("submit-button-te")).not.toBeInTheDocument();
    expect(
      loginPage.queryByAltText("login-page-svg-te")
    ).not.toBeInTheDocument();
    expect(loginPage.getByTestId("login-header")).toBeInTheDocument();
    expect(loginPage.getByTestId("login-header")).toHaveTextContent(
      "Employee Polls"
    );
    expect(loginPage.getByTestId("login-header")).toContainHTML("h1");
    expect(loginPage.getByTestId("login-header")).toHaveClass("header");
    // expect(loginPage.getByAltText("Employee Polls")).toBeInTheDocument();
  });

  it("should render the login page component elements ", () => {
    const loginpagecomponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
    expect(loginpagecomponent.getByTestId("login-header")).toBeInTheDocument();
    expect(
      loginpagecomponent.getByAltText("login-page-svg")
    ).toBeInTheDocument();
    expect(loginpagecomponent.getByText("Log In")).toBeInTheDocument();
    // expect(loginpagecomponent.getByLabelText("User")).toBeInTheDocument();
    // expect(loginpagecomponent.getByLabelText("Password")).toBeInTheDocument();
    expect(loginpagecomponent.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("should clear input elements after clicking submit button", async () => {
    await store.dispatch(handleInitialData());
    const loginPagecomp = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    const loginHeader = loginPagecomp.getByTestId("login-header");
    expect(loginHeader).toBeInTheDocument();

    const usernameInput = loginPagecomp.getByTestId("username-input");
    expect(usernameInput).toBeInTheDocument();
    fireEvent.change(usernameInput, { target: { value: "" } });
    expect(usernameInput.value).toBe("");

    const passwordInput = loginPagecomp.getByTestId("password-input");
    expect(passwordInput).toBeInTheDocument();
    fireEvent.change(passwordInput, { target: { value: "" } });
    expect(passwordInput.value).toBe("");

    const submitButton = loginPagecomp.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
  });
});
