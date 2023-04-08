import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {render} from '@testing-library/react';
import {store} from "./store";
import userEvent from '@testing-library/user-event';
import {setAuthedUser} from "./actions/authedUser";
import App from './App';

describe("App.js component", () => {

    it("should render the component app.js", () => {
        const Appcomponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        expect(Appcomponent).toBeDefined();
        expect(Appcomponent).toMatchSnapshot();
    });

    it("should render the loginpage component", () => {
        const loginPageComponent = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        const loginpageComp = loginPageComponent.getByTestId("login-header");
        expect(loginpageComp).toBeInTheDocument();
    });

    it("should show Dashboard page when logged in", () => {
        store.dispatch(setAuthedUser({id: "", password: ""}));
        const dashboardComp = render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        );
        const employeeDashboard = dashboardComp.getByTestId("employee-dashboard");
        expect(employeeDashboard).toBeInTheDocument();
    });


});
