const fs = require('fs');
const { read } = require('./read');
const english = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ' ', ',', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
function roll () {
  return Math.round(Math.random() * english.length);
}
let output = '';
let alphabet = english[roll()];
function newAlphabet (letter) {
  while (alphabet !== letter) {
    alphabet = english[roll()];
  }
  output += alphabet;
}
function write () {
  fs.writeFile('./hello.txt', output, () => {
    console.log(read());
  });
}
module.exports = { newAlphabet, write };
