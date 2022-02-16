import {screen} from "@testing-library/react";
import React from "react";
import Mission from "../src/components/Mission";
import {RStoreWithoutData} from "./store/RStoreWithoutData";
import {rendeWithData} from "./store/RStoreWithData";

describe("Mission", () => {
  it("renders without data", () => {
    RStoreWithoutData(
        <Mission/>
    );
    expect(screen.getByRole("button", {name: "See More"})).toBeInTheDocument();
  });

  it("renders with data video link", () => {
    rendeWithData(
        <Mission/>
    );
    expect(screen.getByRole("link", {name: "See More"})).toBeInTheDocument();
  });
});
