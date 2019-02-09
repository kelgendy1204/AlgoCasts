// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const stringAObject = {};
    const stringBObject = {};
    let isAnagrams = true;
    for (var i = 0; i < stringA.length; i++) {
        const character = stringA[i].toLowerCase();
        if(character.match(/[a-z]/i)) {
            stringAObject[character] = stringAObject[character] ? stringAObject[character] + 1 : 1;
        }
    }
    for (var i = 0; i < stringB.length; i++) {
        const character = stringB[i].toLowerCase();
        if(character.match(/[a-z]/i)) {
            stringBObject[character] = stringBObject[character] ? stringBObject[character] + 1 : 1;
        }
    }
    if(Object.keys(stringAObject).length !== Object.keys(stringBObject).length) {
        isAnagrams = false;
        return isAnagrams;
    }
    for(let key in stringAObject) {
        if(stringAObject[key] !== stringBObject[key]) {
            isAnagrams = false;
            return isAnagrams;
        }
    }
    return isAnagrams;
}

module.exports = anagrams;
