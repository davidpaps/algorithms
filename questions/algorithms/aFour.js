"use strict";
// 4)
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and neutral elements. Print the decimal value of each fraction on a new line.
// The decimal values must beto  six decimal places.

// plusMinus has the following parameter(s):
// arr: an array of integers

// E.g: [ -4, 3, -9, 0, 4, 1] =>
// 0.500000
// 0.333333
// 0.166667

const plusMinus = (arr) => {
  let number = arr.length;
  let positive = 0;
  let negative = 0;
  let neutral = 0;

  for (let i = 0; i <= number; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else if (arr[i] === 0) {
      neutral++;
    }
  }

  let fractions = [];
  fractions.push(positive / number).toFixed(6);
  fractions.push(negative / number).toFixed(6);
  fractions.push(neutral / number).toFixed(6);

  fractions.forEach((element) => console.log(element.toFixed(6)));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
