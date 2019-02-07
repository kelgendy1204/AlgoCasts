// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charactersMap = {};
    for (var i = 0; i < str.length; i++) {
        if(charactersMap[str[i]]) {
            charactersMap[str[i]] = charactersMap[str[i]] + 1;
        } else {
            charactersMap[str[i]] = 1;
        }
    }
    let maxNumber = 0;
    let mostCharUsed;
    for (const char in charactersMap) {
        if(maxNumber <= parseInt(charactersMap[char])) {
            mostCharUsed = char;
            maxNumber = parseInt(charactersMap[char]);
        }
    }
    return mostCharUsed;
}

module.exports = maxChar;
