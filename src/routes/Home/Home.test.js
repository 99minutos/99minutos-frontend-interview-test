import { render } from '@testing-library/react';
import Home from "./Home"
import {BrowserRouter as Router, Route} from "react-router-dom"

test("Check button to dashboard", () => {
    let testHistory, testLocation;
    const {getByTestId}= render(
        <Router>
            <Home/>
            <Route
                path="*"
                render={({ history, location }) => {
                    testHistory = history;
                    testLocation = location;
                    return null;
                }}
            />
        </Router>
    );
    getByTestId('todashboard-button').click()
    expect(testLocation.pathname).toBe("/dashboard");
})