/* 
Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].
*/

function squareAndSortSimple(arr) {
    return arr.map(x => x ** 2).sort((a, b) => a - b);
}

let arr = [-9, -2, 0, 2, 3];
console.log(squareAndSortSimple(arr));