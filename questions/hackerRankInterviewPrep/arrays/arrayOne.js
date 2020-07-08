"use strict";

// 1)
// Given a 6 x 6 matrix (6 length 3d(matrix) array || 36 length 2d array), there are 16 'hourglass' shapes present.

// hourglassSum has the following parameter(s):
// arr: an array of integers

// You will need to calculate the sum for each of the 16 hourglasses present in the matrix array, then print the largest value.

// 3D
// E.g [Matrix] => 19

// Matrix:
// [[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 2, 4, 4, 0],
// [0, 0, 0, 2, 0, 0],
// [0, 0, 1, 2, 4, 0]];

// Hourglass:
//   2 4 4
//     2
//   1 2 4

const hourGlassSum3D = (arr) => {
  let array = arr.flat();
  let scores = [];

  for (let j = 0; j <= 18; j += 6) {
    for (let i = j; i < j + 4; i++) {
      let answer =
        array[i] +
        array[i + 1] +
        array[i + 2] +
        array[i + 7] +
        array[i + 12] +
        array[i + 13] +
        array[i + 14];
      scores.push(answer);
    }
  }

  let largest = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (largest < scores[i]) {
      largest = scores[i];
    }
  }

  return largest;
};

console.log(
  hourGlassSum3D([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);

// 7, 4, 2, 0
// 4, 8, 10, 8
// 3, 6, 7, 6
// 3, 9, 19, 14

// 2D

// Array:
// [1, 1, 1, 0, 0, 0,
// 0, 1, 0, 0, 0, 0,
// 1, 1, 1, 0, 0, 0,
// 0, 0, 2, 4, 4, 0,
// 0, 0, 0, 2, 0, 0,
// 0, 0, 1, 2, 4, 0];

// Hourglass:
//   2 4 4
//     2
//   1 2 4

const hourGlassSum2D = (arr) => {
  let scores = [];

  for (let j = 0; j <= 18; j += 6) {
    for (let i = j; i < j + 4; i++) {
      let answer =
        arr[i] +
        arr[i + 1] +
        arr[i + 2] +
        arr[i + 7] +
        arr[i + 12] +
        arr[i + 13] +
        arr[i + 14];
      scores.push(answer);
    }
  }

  let largest = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (largest < scores[i]) {
      largest = scores[i];
    }
  }

  return largest;
};

console.log(
  hourGlassSum2D([
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    2,
    4,
    4,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    1,
    2,
    4,
    0,
  ])
);
