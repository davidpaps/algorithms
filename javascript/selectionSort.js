"use strict";

const findSmallestIndex = (array) => {
  let smallestElement = array[0];
  let smallestIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const sortedArray = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};

let myArray = [5, 3, 6, 2, 10];
console.log(selectionSort(myArray));
