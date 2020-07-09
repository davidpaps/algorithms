"use strict";

// 1)
// Consider the following version of bubble sort:

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - 1; j++) {
//                                       Swap adjacent elements if they are in decreasing order
//     if (a[j] > a[j + 1]) {
//       let tmp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = tmp;
//     }
//   }
// }

// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

// 'Array is sorted in n swaps' (integer) the number of swaps that took place.
// 'First Element:' (integer) the first element in the sorted array.
// 'Last Element:' (integer) the last element in the sorted array.

// E.g: [6, 4, 1] =>
// Array is sorted in 3 swaps.
// First Element: 1
// Last Element: 6

// ( Starting Array [6,4,1]
//   1 Swap         [4,6,1]
//   2 Swaps        [4,1,6]
//   3 Swaps        [1,4,6] )

const countSwaps = (a) => {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        counter++;
      }
    }
  }

  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
};

countSwaps([6, 4, 1]);
