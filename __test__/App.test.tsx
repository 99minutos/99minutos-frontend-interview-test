import {screen} from "@testing-library/react";
import React from "react";
import App from "../src/pages";
import {MockedProvider} from '@apollo/react-testing';
import {ApolloLink} from "@apollo/client/link/core";
import {render} from "./store/RStore";

describe("App", () => {
  it("render all app", () => {
    const timeStartLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        start: new Date(),
      });
      return forward(operation);
    });
    render(
        <MockedProvider link={timeStartLink}>
          <App/>
        </MockedProvider>
    );
    expect(screen.getByRole("heading", {name: "Last Launches"})).toBeInTheDocument();
  });
});
