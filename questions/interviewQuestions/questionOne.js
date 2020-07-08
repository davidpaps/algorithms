// Q1: Given an array of integers, return an array with all duplicate numbers removed.
// EG [1, 1, 1, 2, 3, 8, 8, 16, 20, 20] => [1, 2, 3, 8, 16, 20]

let numbers = [1, 1, 1, 2, 3, 8, 8, 16, 20, 20];

// Quadratic Time
// iterate over the array and for each element check if the first position of this element in the array is equal to the current position.
// These two positions are different for duplicate elements.

const uniqueOne = (array) => {
  let unique = array.filter((item, position, self) => {
    return self.indexOf(item) == position;
  });
  return unique;
};

console.log(uniqueOne(numbers));

//  Linear Time
//  Place each element in a hashtable and then check for its presence instantly (hasOwnProperty returns a boolean indicating if the object
//  has the element).

const uniqueTwo = (array) => {
  let seen = {};
  return array.filter((element) => {
    return seen.hasOwnProperty(element) ? false : (seen[element] = true);
  });
};

console.log(uniqueTwo(numbers));

// Function calls are expensive in JavaScript, therefore the above solutions, as concise as they are, are not particularly efficient.
// For maximal performance, replace filter with a loop and get rid of other function calls:

// 3 ES6
// Sets are iterated in insertion order, so this code preserves the order of the original array.
const uniqueThree = (array) => {
  return [...new Set(array)];
};

console.log(uniqueThree(numbers));

// 4 Hash Tables
// Array is looped over and if not in the count hash (undefined), pushed into new array and the element is assigned to a key in the count hash.
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
