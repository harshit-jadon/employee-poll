import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import NewPollPage from "./NewPollPage";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("NewPoll", () => {
  it("Render the New PollPage component", () => {
    const NewPollPagecomponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPollPage />
        </BrowserRouter>
      </Provider>
    );
    expect(NewPollPagecomponent).toBeDefined();
    expect(NewPollPagecomponent).toMatchSnapshot();
  });

  it('should render the form inputs in th enewpoll page component', () => {
    const NewPollPagecomponent = render(
        <Provider store={store}>
          <BrowserRouter>
            <NewPollPage />
          </BrowserRouter>
        </Provider>
      );
  expect(NewPollPagecomponent.getByTestId('label-first-option')).toBeInTheDocument();
  expect(NewPollPagecomponent.getByTestId('input-first-option')).toBeInTheDocument();
  expect(NewPollPagecomponent.getByTestId('label-second-option')).toBeInTheDocument();
  expect(NewPollPagecomponent.getByTestId('input-second-option')).toBeInTheDocument();
  expect(NewPollPagecomponent.getByTestId('submit-button')).toBeInTheDocument();
});

  it("should display all elements in the newpoll component", () => {
    const NewPollPagecomponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPollPage />
        </BrowserRouter>
      </Provider>
    );

    const firstOptionLabel =
      NewPollPagecomponent.getByTestId("label-first-option");
    const firstOptionInput =
      NewPollPagecomponent.getByTestId("input-first-option");
    expect(firstOptionLabel.textContent).toBe("First Option");
    fireEvent.change(firstOptionInput, { target: { value: "Javascript" } });
    expect(firstOptionInput.value).toBe("Javascript");

    const secondOptionLabel = NewPollPagecomponent.getByTestId(
      "label-second-option"
    );
    const secondOptionInput = NewPollPagecomponent.getByTestId(
      "input-second-option"
    );
    expect(secondOptionLabel.textContent).toBe("Second Option");
    fireEvent.change(secondOptionInput, {
      target: { value: "Web- development" },
    });
    expect(secondOptionInput.value).toBe("Web- development");

    const submitButtonElement =
      NewPollPagecomponent.getByTestId("submit-button");
    expect(submitButtonElement.textContent).toBe("Submit");
  });


  
});
