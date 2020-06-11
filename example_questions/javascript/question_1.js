// Q1: Given an array of integers, return an array with all duplicate numbers removed.
// EG [1, 1, 1, 2, 3, 8, 8, 16, 20, 20] => [1, 2, 3, 8, 16, 20]

// 1
const unique = (array) => {
  return [...new Set(numbers)];
};

// 2
const uniqueTwo = (array) => {
  let count = {};
  let unique = [];
  array.forEach((element) => {
    if (count[element] === undefined) {
      count[element] = 1;
      unique.push(element);
    }
  });
  return unique;
};

let numbers = [1, 1, 1, 2, 3, 8, 8, 16, 20, 20];
console.log(unique(numbers));
console.log(uniqueTwo(numbers));
