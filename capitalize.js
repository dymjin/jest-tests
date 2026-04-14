export function capitalize(word) {
  let wordArr = word.split("");
  wordArr[0] = wordArr[0].toUpperCase();
  return wordArr.join("");
}
