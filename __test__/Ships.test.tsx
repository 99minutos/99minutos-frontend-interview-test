import {render, screen} from "@testing-library/react";
import React from "react";
import RShips from "../src/components/RShips";

describe("Ships", () => {
  it("renders component RShips", () => {
    const data = [
      {
        "name": "xpacex",
        "home_port": "1",
        "image": "https://picsum.photos/seed/picsum/200/300"
      },
      {
        "name": "xpacey",
        "home_port": "1",
        "image": "https://picsum.photos/seed/picsum/200/300"
      },
    ]
    render(
      <RShips ship={data}></RShips>
    );
    expect(screen.getByRole("img", {name: "xpacex"})).toBeInTheDocument();
  });
  it("renders without data", () => {
    const {container} = render(
      <RShips ship={[]}></RShips>
    );
    expect(container.firstChild).toContainHTML(`<div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1" style="height: 290px; overflow: auto;"></div>`)
  });
});
