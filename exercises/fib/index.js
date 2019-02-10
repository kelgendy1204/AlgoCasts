// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return number => {
        if(cache[number.toString()]) {
            console.log('from cache');
            return cache[number.toString()];
        }

        cache[number.toString()] = fn(number);
        return cache[number.toString()];
    };
}

function fib(n) {
    if(n === 1) {
        return 1;
    }

    if(n === 0) {
        return 0;
    }

    return flastFib(n-1) + flastFib(n-2);
}

const flastFib = memoize(fib);

module.exports = flastFib;
