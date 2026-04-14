import { calculator } from "./calculator.js";
console.log(calculator.divide)

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("subtract", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test("multiply", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(4, 6)).toBe(24);
  });
  test("divide", () => {
    expect(calculator.divide(2, 1)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
  });
});
