"use strict";
// 3)
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age.
// When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights

// E.g: [3 2 1 3] => 2
// (2 x 3)

const birthdayCakeCandles = (ar) => {
  let sorted = ar.sort().reverse();
  let tall = sorted[0];
  let count = 0;
  sorted.forEach((number) => {
    number === tall && count++;
  });
  return count;
};

console.log(birthdayCakeCandles([3, 2, 1, 3]));
