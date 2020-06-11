// Q2: Given 2 strings, return an array with characters that appear equal times in each string.

// EG ‘abc’, ‘bcd’ => [‘b’, ‘c’] both b and c appear once in each string
// EG ‘aaaaaaannd’, ‘ann’ => [‘n’] n appears twice in each string. a is 7 in first string and only 1 in second string so they aren’t equal.
// EG ‘hello’, ‘world’ => [‘o’] o appears once in each string. L appears in both, twice in first and only once in second so not equal.

let stringOne = "hello";
let stringTwo = "world";

const equalString = (stringOne, stringTwo) => {
  let arrayOne = stringOne.split("");
  let arrayTwo = stringTwo.split("");
  let countOne = {};
  let countTwo = {};
  let finalArray = [];
  arrayOne.forEach((element) => {
    if (countOne[element] === undefined) {
      countOne[element] = 1;
    } else {
      countOne[element] += 1;
    }
  });
  arrayTwo.forEach((element) => {
    if (countTwo[element] === undefined) {
      countTwo[element] = 1;
    } else {
      countTwo[element] += 1;
    }
  });

  Object.keys(countOne).forEach((key) => {
    if (countOne[key] === countTwo[key]) {
      finalArray.push(key);
    }
  });
  return finalArray;
};

console.log(equalString(stringOne, stringTwo));
