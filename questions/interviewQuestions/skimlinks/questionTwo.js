"use strict";

// 2)
// Given an array of intergers, and a target value, return the number of possible pairs of elements that, when added together, equal the target value.
// If there are duplicate numbers in the array, these can not be used as another pair with the ther element (even though this is technically a different element).

// return a single integer with the unique possible pairs of elements that add up to the target value

// E.g: arr = [5, 7, 9, 13, 11, 6, 6, 3, 3]  target = 12 => 3
// (even though there are 4 pairs, because there are 2 x 3's in the array, one of the 9 + 3 pairs does not count).

const pairAddition = (array, target) => {
  let arr = [];

  for (let j = 0; j < array.length; j++) {
    for (let i = 1; i < array.length; i++) {
      if (array[j] + array[i] === target) {
        arr.push(array[j], array[i]);
      }
    }
  }
  let unique = [...new Set(arr)];

  return Math.ceil(unique.length / 2);
};

console.log(pairAddition([5, 7, 9, 13, 11, 6, 6, 3, 3], 12));
