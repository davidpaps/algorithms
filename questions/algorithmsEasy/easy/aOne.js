"use strict";

// 1) Given an array of integers, find the sum of its elements.

// simpleArraySum has the following parameter(s):
// ar: an array of integers

// E.g: [1, 2, 3] => 6

// 1
const simpleArraySum = (ar) => {
  let count = 0;
  ar.forEach((element) => (count += element));
  return count;
};

console.log(simpleArraySum([1, 2, 3]));

// 2
const simpleArraySumTwo = (ar) => {
  return ar.reduce((a, b) => a + b, 0);
};

console.log(simpleArraySumTwo([1, 2, 3]));

// 2) Given an array of integers, retuen an array with all the elements squared.

// simpleArraySquare has the following parameter(s):
// ar: an array of integers

// E.g: [1, 2, 3] => [1, 4, 9]

const simpleArraySquare = (ar) => {
  return ar.map((element) => element * element);
};

console.log(simpleArraySquare([1, 2, 3]));
