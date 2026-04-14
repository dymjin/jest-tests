let alphabet = "abcdefghijklmnopqrstuvwxyz";
export function caesarCipher(str, key) {
  let tempAlphabet;
  let strArr = str.split("");
  let mappedStrArr = strArr.map((char) => {
    if (isCharNonChar(char)) {
      return char;
    }
    if (isCharCapitalized(char)) {
      tempAlphabet = alphabet.toUpperCase();
    } else {
      tempAlphabet = alphabet.toLowerCase();
    }
    let charCode = tempAlphabet.indexOf(char) + 1;
    let shiftedCharCode;
    if (isCharCodePastEnd(charCode)) {
      shiftedCharCode = charCode + key;
    } else {
      shiftedCharCode = charCode + key - tempAlphabet.length;
    }
    return tempAlphabet.at(shiftedCharCode - 1);
  });
  return mappedStrArr.join("");
}

function isCharNonChar(char) {
  return (
    alphabet.toUpperCase().indexOf(char) === -1 &&
    alphabet.toLowerCase().indexOf(char) === -1
  );
}

function isCharCapitalized(char) {
  return alphabet.indexOf(char) === -1;
}

function isCharCodePastEnd(code) {
  return code > alphabet.length;
}
