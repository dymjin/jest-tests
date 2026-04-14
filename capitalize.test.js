import { capitalize } from "./capitalize.js";

test("capitalizes the word test", () => {
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("draw")).toBe("Draw");
});
