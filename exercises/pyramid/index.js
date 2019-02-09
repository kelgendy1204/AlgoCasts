// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (var row = 1; row <= n; row++) {
        let steps = '';
        const maxColumn = (2 * n) - 1;
        const halfColumnPosition = Math.ceil(maxColumn / 2);
        for (var column = 1; column <= maxColumn; column++) {
            if(column > halfColumnPosition - row && column < halfColumnPosition + row) {
                steps += '#';
            } else {
                steps += ' ';
            }
        }
        console.log(steps);
    }
}

module.exports = pyramid;
