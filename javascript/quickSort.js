"use strict";

const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter((key) => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter((key) => key > pivot);
  return [
    ...quickSort(keysAreLessPivot),
    pivot,
    ...quickSort(keysAreMorePivot),
  ];
};

let myArray = [10, 5, 2, 3];
console.log(quickSort(myArray));
