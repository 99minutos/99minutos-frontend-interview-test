import { render, screen} from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import Dashboard from "./Dasboard"
import {GET_ALL_LAUNCHES} from "../../grapql/queries"

const mocks = [
    {
      request: {
        query: GET_ALL_LAUNCHES
      },
        error: new Error("Something went wrong"),
    },
]

test("Test Loading Before Dashboard", () => {
    render(
        <MockedProvider mocks={mocks}>
            <Dashboard/>
        </MockedProvider>
    )
    expect(screen.getByText('🚀 Loading . . .')).toBeInTheDocument()
})

