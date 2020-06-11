// Q1: Given an array of integers, return an array with all duplicate numbers removed.
// EG [1, 1, 1, 2, 3, 8, 8, 16, 20, 20] => [1, 2, 3, 8, 16, 20]

let numbers = [1, 1, 1, 2, 3, 8, 8, 16, 20, 20];

//  Quadratic Time
const uniqueOne = (array) => {
  let unique = array.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
  return unique;
};

console.log(uniqueOne(numbers));

//  Linear Time
const uniqueTwo = (array) => {
  let seen = {};
  return array.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
};

console.log(uniqueTwo(numbers));

// Function calls are expensive in JavaScript, therefore the above solutions, as concise as they are, are not particularly efficient.
// For maximal performance, replace filter with a loop and get rid of other function calls:

// 3 ES6 Three
const uniqueThree = (array) => {
  return [...new Set(numbers)];
};

console.log(uniqueThree(numbers));

// 4
const uniqueFour = (array) => {
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

console.log(uniqueFour(numbers));
