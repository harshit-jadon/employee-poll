import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { employeeUser } from "../../actions/authedUser";

import { store } from "../../store";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders NavBar component without errors", () => {
    const navBarComp = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
    expect(navBarComp).toBeDefined();
    expect(navBarComp).toMatchSnapshot();
  });

  test("Home link is present and clickable", () => {
    const navBarComp = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
    const homeLink = navBarComp.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("Leaderboard link is present and clickable", () => {
    const navBarComp = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
    const leaderboardLink = navBarComp.getByText(/Leaderboard/i);
    expect(leaderboardLink).toBeInTheDocument();
    expect(leaderboardLink).toHaveAttribute("href", "/leaderboard");
  });

  test("New link is present and clickable", () => {
    const navBarComp = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
    const newLink = navBarComp.getByText(/New/i);
    expect(newLink).toBeInTheDocument();
    expect(newLink).toHaveAttribute("href", "/add");
  });

  test("should display username of logged in user", () => {
    store.dispatch(employeeUser({ id: "sarahedo", password: "" }));

    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    const userSpanElement = component.getByTestId("employee-id");
    expect(userSpanElement.textContent).toBe("sarahedo");
  });

  test("user information is displayed correctly", () => {
    const navBarComp = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar
            employeeId="employee-id"
            employeeAvatar="https://github.com/tyler.png"
          />
        </BrowserRouter>
      </Provider>
    );
    const userInformation = navBarComp.getByTestId("employee-id");
    const userAvatar = navBarComp.getByAltText("emloyeeAvatar");
    // const userId = navBarComp.getByText('tylermcginnis');
    expect(userInformation).toBeInTheDocument();
    expect(userAvatar).toBeInTheDocument();
    // expect(userAvatar).toHaveAttribute('src', 'https://github.com/tyler.png');
    // expect(userId).toBeInTheDocument();
  });

  //   test('should call onSubmit when Logout button is clicked', async () => {
  //     const onSubmit = jest.fn();
  //     const navBarComp = render(
  //       <Provider store={store}>
  //         <BrowserRouter>
  //           <NavBar employeeId="tylermcginnis" employeeAvatar="https://github.com/tyler.png" dispatch={onSubmit} />
  //         </BrowserRouter>
  //       </Provider>
  //     );
  //     const logoutButton = navBarComp.getByRole('button', { name: /logout/i });
  //     fireEvent.click(logoutButton);
  //     await waitFor(() => expect(onSubmit).toBeCalled());
  //     expect(logoutButton).toHaveTextContent(/logout/i);
  //   });
});
