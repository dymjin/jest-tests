import { capitalize } from "./capitalize.js";
console.log(capitalize("test"))

test("capitalizes the word test", () => {
  expect(capitalize("test")).toBe("Test");
  expect(capitalize("draw")).toBe("Draw")
});


