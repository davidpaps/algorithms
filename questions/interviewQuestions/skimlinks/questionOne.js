"use strict";

// 1) Given a number n, print the Fizzbuzz sequence for each of the numbers between 1..n.

// If it is a multiple of 3 print 'Fizz'
// If it is a multiple of 5 print 'Buzz'
// If it is a multiple of both 3 & 5 print 'FizzBuzz'
// Otherwise print the number

// E.g: 5 => 1, 2, Fizz, 4, Buzz

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);
