// Q3: Given an array of strings, return an array showing all unique words.
// EG [‘hello’, ‘world’, ‘hello’] => [‘hello’, ‘world’]

let words = ["hello", "world", "hello"];

// 1
const uniqueWords = (array) => {
  return [...new Set(array)];
};

console.log(uniqueWords(words));

// 2
const uniqueWordsTwo = (array) => {
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

console.log(uniqueWordsTwo(words));
