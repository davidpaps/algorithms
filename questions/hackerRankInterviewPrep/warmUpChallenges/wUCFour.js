"use strict";
// 4)
// Lilah has a string of lowercase English letters that she repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

// It should return an integer representing the number of occurrences of a in the prefix of length n, in the infinitely repeating string.
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider

// E.g: abcac, n=10 => 4 (substring = abcacabcac)

const repeatedString = (s, n) => {
  let divider = Math.floor(n / s.length);
  let remainder = n % s.length;
  let count = (s.split("a").length - 1) * divider;

  for (let i = 0; i < remainder; i++) {
    if (s.charAt(i) === "a") count++;
  }
  return count;
};

console.log(repeatedString("abcac", 10));
