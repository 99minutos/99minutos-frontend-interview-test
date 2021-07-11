import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import LastLaunches from "./LastLaunches";
import { TEST_DATA } from "../../testData/testData";

Enzyme.configure({ adapter: new Adapter() });

describe("card list renders nothing", () => {
  const wrapper = shallow(<LastLaunches apiData={TEST_DATA} />);

  it("renders 0 cards (no props)", () => {
    expect(wrapper.find("Cards")).toHaveLength(0);
  });
});

describe("card list renders", () => {
  //arrange
  let useEffect;
  let wrapper;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    /* mocking useEffect */
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    //act
    wrapper = shallow(<LastLaunches apiData={TEST_DATA} />);
  });

  it("renders cards when passed props", () => {
    //assert
    expect(wrapper.find("Cards")).toHaveLength(5);
  });
});
