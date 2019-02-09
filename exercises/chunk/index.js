// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const newArray = [];
    for (var i = 0; i < array.length; i++) {
        if(!newArray[newArray.length - 1] || newArray[newArray.length - 1].length >= size) {
            newArray.push([]);
            newArray[newArray.length - 1].push(array[i]);
        } else {
            newArray[newArray.length - 1].push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;
}

module.exports = chunk;
