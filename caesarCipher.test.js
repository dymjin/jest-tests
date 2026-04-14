import { caesarCipher } from "./caesarCipher.js";

test("shifts each character of word", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("shifts character past end", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("CiPhEr", 1)).toBe("DjQiFs");
});

test("preserves any non character", () => {
  expect(caesarCipher("Hello, world!", 3)).toBe("Khoor, zruog!");
});