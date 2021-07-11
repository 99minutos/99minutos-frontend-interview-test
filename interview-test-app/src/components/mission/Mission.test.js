import React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow } from "enzyme";

import Mission from "./Mission";
import CustomCarousel from "./CustomCarousel";
import { TEST_DATA } from "../../testData/testData";

Enzyme.configure({ adapter: new Adapter() });

describe("Mission Component with data", () => {
  const selectedMission = TEST_DATA[0];
  const wrapper = shallow(<Mission selectedMission={selectedMission} />);

  it("renders carousel component", () => {
    expect(wrapper.find(CustomCarousel)).toHaveLength(1);
  });

  it("renders title", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("renders content", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });

  it("renders react-bootstrap button", () => {
    expect(wrapper.find(".btn")).toHaveLength(1);
  });
});

describe("Mission Component without data", () => {
    const wrapper = shallow(<Mission selectedMission={{}}/>);
  
    it("renders carousel component", () => {
      expect(wrapper.find(CustomCarousel)).toHaveLength(0);
    });
  
    it("renders default title", () => {
      expect(wrapper.find("h1").text()).toBe("Select a Card");
    });
  
    it("renders content", () => {
      expect(wrapper.find("main").text()).toBe("");
    });
  
    it("doesn't render a react-bootstrap button", () => {
      expect(wrapper.find(".btn")).toHaveLength(0);
    });
  });
