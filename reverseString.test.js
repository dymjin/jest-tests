import { reverseString } from "./reverseString.js";

test("reverses the given word", () => {
  expect(reverseString("test")).toBe("tset");
  expect(reverseString("backwards")).toBe("sdrawkcab");
});
