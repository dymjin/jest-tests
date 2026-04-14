// https://stackoverflow.com/a/1527820
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function makeRandomIntArr() {
  let randomArrLen = Math.floor(getRandomArbitrary(5, 10));
  let arr = Array.from({ length: randomArrLen }, () =>
    Math.floor(Math.random() * 10),
  );
  return arr;
}

function analyzeArray(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let min = sortedArr[0];
  let max = sortedArr[arr.length - 1];
  let average = arr.reduce((prev, curr) => prev + curr) / arr.length;
  let length = arr.length;

  return { min, max, average, length };
}

let object = analyzeArray(makeRandomIntArr());
export { object, analyzeArray };
