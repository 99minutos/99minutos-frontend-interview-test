import { render } from '@testing-library/react';
import Launch from "./Launch"
import {BrowserRouter as Router, Route} from "react-router-dom"

const dummyData = {
    id: "100",
    mission_name: "Name",
    details: "Details",
    launch_date_local: "2020-10-24T11:31:00-04:00"
}
test("Launch get Correct Info", () => {
    const {getByText} = render(
        <Launch launch={dummyData}/>
    )
    expect(getByText(/Name/i)).toBeInTheDocument()
    expect(getByText(/Details/i)).toBeInTheDocument()
    expect(getByText(/10[/]24[/]2020/i)).toBeInTheDocument()
})

test("On click check path id", () => {
    let testHistory, testLocation;
    const {getByText} = render(
        <Router>
            <Launch launch={dummyData}/>
            <Route
                path="*"
                render={({ history, location }) => {
                    testHistory = history;
                    testLocation = location;
                    return null;
                }}
            />
        </Router>
    )
    getByText(/Name/i).click()
    expect(testLocation.pathname).toBe("/mission/100");
})