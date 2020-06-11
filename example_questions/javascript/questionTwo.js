// Q2: Given 2 strings, return an array with characters that appear equal times in each string.
// EG ‘hello’, ‘world’ => [‘o’] o appears once in each string. L appears in both, twice in first and only once in second so not equal.

let stringOne = "hello";
let stringTwo = "world";

// 1
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

// 2
const equalStringTwo = (stringOne, stringTwo) => {
  let arrayOne = stringOne.split("");
  let arrayTwo = stringTwo.split("");
  let countOne = {};
  let countTwo = {};
  let finalArray = [];
  for (let i = 0; i < stringOne.length && i < stringTwo.length; i++) {
    let count = stringOne.split(arrayOne[i]).length - 1;
    countOne[arrayOne[i]] = count;

    let countT = stringTwo.split(arrayTwo[i]).length - 1;
    countTwo[arrayTwo[i]] = countT;
  }
  Object.keys(countOne).forEach((key) => {
    if (countOne[key] === countTwo[key]) {
      finalArray.push(key);
    }
  });
  return finalArray;
};

console.log(equalStringTwo(stringOne, stringTwo));
