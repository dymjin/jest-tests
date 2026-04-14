import { analyzeArray, object } from "./analyzeArray.js";

describe("object", () => {
  test("has average", () => {
    expect(object.average).toBeDefined();
  });
  test("has min", () => {
    expect(object.min).toBeDefined();
  });
  test("has max", () => {
    expect(object.max).toBeDefined();
  });
  test("has length", () => {
    expect(object.length).toBeDefined();
  });
  test("is equal to", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      min: 1,
      max: 8,
      average: 4,
      length: 6,
    });
  });
});
