import sum from "../helper/utilities";

describe("sum function", () => {
  it("should sum 2 numbers", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
