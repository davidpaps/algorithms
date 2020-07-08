"use strict";

// 5)
// Write a program that prints a staircase of size n. The staircase will have a height of and width of n.
// The staircase must be right-alinged using '#' as the symbol.

// staircase has the following parameter(s):
// n: an integer

// E.g: 6 =>

//      #
//     ##
//    ###
//   ####
//  #####
// ######

const staircase = (n) => {
  let symbol = "#";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + symbol.repeat(i));
  }
};

staircase(6);
