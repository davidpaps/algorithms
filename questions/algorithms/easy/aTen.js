"use strict";

// 10)
// Given an array of integers, return an integer that represent the number of paired elements in the array that are divisible by the target value

// divisibleSumPairs has the following parameter(s):
// ar: an array of integers
// k: the integer to divide the pair sum by

const divisibleSumPairs = (target, array) => {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) % target === 0) {
        arr.push(array[i], array[j]);
      }
    }
  }

  return arr.length / 2;
};

console.log(divisibleSumPairs(3, [1, 3, 2, 6, 1, 2]));
