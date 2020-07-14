"use strict";
// 11)
// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.
// Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item.
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

// bonAppetit has the following parameter(s):
// bill: an array of integers representing the cost of each item ordered
// index: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

// E.g: [3, 10, 2, 9], 1, 4 => 5

const bonAppetit = (bill, index, b) => {
  bill.splice(index, 1);
  let addItems = bill.reduce((a, b) => a + b, 0);

  let total = addItems / 2;

  total === b ? console.log("Bon Appetit") : console.log(b - total);
};

bonAppetit([3, 10, 2, 9], 1, 12);
