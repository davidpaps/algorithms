// Q4: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// EG [2, 7, 11, 15], target = 9 => [0, 1]

let array = [2, 7, 11, 15];
let target = 9;

// 1
const addIndex = (array, target) => {
  let count = {};
  let pairIndex = [];
  array.forEach((element) => {
    count[element] = 1;
  });

  for (let i = 0; i < array.length; i++) {
    let number = target - array[i];
    if (count.hasOwnProperty(number)) {
      pairIndex.push(i);
    }
  }
  return pairIndex;
};

console.log(addIndex(array, target));

// 2
const addIndexTwo = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(addIndexTwo(array, target));
