import {render, screen} from "@testing-library/react";
import React from "react";
import Launche from "../src/components/Launche";
import {LauncheType} from "../src/common/types/app/Launche";
import {rendeWithData} from "./store/RStoreWithData";

describe("Launch", () => {
  it("renders with data and view mission name", () => {
    const launch = {
      id:1,
      "mission_name": "Space",
      "launch_date_local": "2020-10-24T11:31:00-04:00",
      "launch_site": {
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "links": {
        "article_link": null,
        "video_link": "https://www.youtube.com/watch?v=zrOfZzXyNXQ",
        "mission_patch": ""
      },
      "ships": [],
      "details": "test"
    }
    const data = (d: LauncheType) => {
      console.log(d)
    }
    rendeWithData(
        <Launche  launch={launch} onClick={data} />
    );
    expect(screen.getByRole("heading", {name: "Space"})).toBeInTheDocument();
  });
});
