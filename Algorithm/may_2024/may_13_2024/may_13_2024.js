/* 
A regular number in mathematics is defined as one which evenly divides some power of 60. Equivalently, we can say that a regular number is one whose only prime divisors are 2, 3, and 5.

These numbers have had many applications, from helping ancient Babylonians keep time to tuning instruments according to the diatonic scale.

Given an integer N, write a program that returns, in order, the first N regular numbers.
*/

function getRegularNumbers(N) {
    if (N <= 0) return [];
    
    const regularNumbers = [];
    let num = 1;

    function getNextRegularNumber() {
        if (regularNumbers.length === N) return;
        if (isRegular(num)) {
            regularNumbers.push(num);
        }
        num++;
        getNextRegularNumber();
    }

    getNextRegularNumber();
    return regularNumbers;
}

function isRegular(num) {
    if (num === 1) return true;
    if (num % 2 === 0) return isRegular(num / 2);
    if (num % 3 === 0) return isRegular(num / 3);
    if (num % 5 === 0) return isRegular(num / 5);
    return false;
}

