"use strict";

// 3)
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// The first line contains a single integer, n, the number of rows and columns in the matrix array.

// diagonalDifference takes the following parameter:
// arr: an array of arrays of integers (3D)

// The integer returned must be the absolute value of the difference.

// [3, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
// =
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// E.g: [1, 2, 3, 4, 5, 6, 7, 8 ,9] => 0

const diagonalDifference = (arr) => {
  let size = arr.length;
  let array = [].concat(...arr);

  let left = 0;
  for (let i = 0; i <= array.length; i += size + 1) {
    left += array[i];
  }

  let right = 0;
  for (let i = size - 1; i < array.length - (size - 1); i += size - 1) {
    right += array[i];
  }

  console.log(right);
  let difference = Math.abs(left - right);

  return difference;
};

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
