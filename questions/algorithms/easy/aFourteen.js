"use strict";
// 14)
// Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the 2 items, given her budget.

// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive,
// print -1 instead. She will buy only the two required items.

// getMoneySpent has the following parameter(s):
// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget

// E.g: [3, 1], [5, 2, 8], 10 => 9

const getMoneySpent = (keyboards, drives, b) => {
  let array = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      array.push(keyboards[i] + drives[j]);
    }
  }

  let finalAmounts = array.sort((a, b) => {
    return b - a;
  });

  for (let l = 0; l < finalAmounts.length; l++) {
    if (finalAmounts[l] === b) {
      return b;
    } else if (finalAmounts[l] > b) {
      finalAmounts.splice(l, 1);
    }
  }
  if (finalAmounts.length === 0) {
    return -1;
  } else {
    return finalAmounts[0];
  }
};

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
