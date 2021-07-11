import React from "react";
import renderer from "react-test-renderer";

import Cards from "./Cards";
import { TEST_DATA } from "../../../testData/testData";
import {transformDate} from "../../../shared/transformDate"

it("card prints data", () => {
  //arrange
  const data = TEST_DATA[0];
  const date =data.launch_date_local
  
  const cardData = {
    selectedCardTitle: data.mission_name,
    setSelectedCardTitle: jest.fn(),
    data: {
      title: data.mission_name,
      launchSite: data.launch_site.site_name_long,
      date: transformDate(date),
    },
    id: data.mission_name,
  };

  //act
  const tree = renderer.create(<Cards {...cardData} />);
  //assert
  expect(tree).toMatchSnapshot();
});
