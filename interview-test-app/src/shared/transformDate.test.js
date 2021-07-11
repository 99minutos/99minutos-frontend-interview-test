import { transformDate } from "./transformDate";

describe("transforming date", () => {
  const date = "05-04-02T123";
  it("transforms date and replace with '/' by default", () => {
    //arrange
    const expected = "02/04/05";
    //act
    const res = transformDate(date);
    //assert
    expect(res).toBe(expected);
  });
  it("transforms date and replace with #", () => {
    //arrange
    const expected = "02#04#05";
    const config={ concatenateWith:"#"}
    //act
    const res = transformDate(date,config);
    //assert
    expect(res).toBe(expected);
  });
  it("returns date for sorting", () => {
    //arrange
    const expected = "050402";
    const config={ needToSort:true}
    //act
    const res = transformDate(date,config);
    //assert
    expect(res).toBe(expected);
  });
});
