"use strict";

// 6)
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// miniMaxSum has the following parameter(s):
// arr: an array of 5 positive integers

// E.g: [1, 3, 5, 7, 9] => 16 24
//  (1 + 3 + 5 + 7 = 16 && 3 + 5 + 7 + 9 = 24)

const miniMaxSum = (arr) => {
  let ordered = arr.sort();

  let min = 0;
  for (let i = 0; i <= 3; i++) {
    min += ordered[i];
  }

  let max = 0;
  for (let i = 1; i <= 4; i++) {
    max += ordered[i];
  }

  console.log(min + " " + max);
};

miniMaxSum([1, 3, 5, 7, 9]);
