"use strict";

// 3)
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// The first line contains a single integer, n, the number of rows and columns in the matrix array.

// diagonalDifference takes the following parameter:
// arr: an array of integers (2D)

// The integer returned must be the absolute value of the difference.

// [3, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
// =
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// E.g: [1, 2, 3, 4, 5, 6, 7, 8 ,9] => 0

const diagonalDifference = (arr) => {
  let left = arr[0] + arr[4] + arr[8];
  let right = arr[2] + arr[4] + arr[6];

  let difference = left - right;

  return Math.abs(difference);
};

console.log(diagonalDifference([1, 2, 3, 4, 5, 6, 7, 8, 9]));
