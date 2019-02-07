// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
const reverseString = require('../reversestring');

function reverseInt(n) {
    let isNegative = false;
    if(n < 0) {
        isNegative = true;
    }
    const stringNumber = n.toString();
    if(isNegative) {
        return parseInt(reverseString(stringNumber)) * -1;
    }
    return parseInt(reverseString(stringNumber));
}

module.exports = reverseInt;
