"use strict";

// 1)
// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string.
// In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams.

// Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make a and b anagrams. Any characters can be deleted from either of the strings.
// Return a single integer with the minimum nuber of deletions.

// makeAnagram has the following parameter(s):

// a: a string
// b: a string

// E.g: a = 'cde'  b = 'abc' => 4

const makeAnagram = (a, b) => {
  let size = a.length > b.length ? [b, a] : [a, b];
  let small = size[0].split("");
  let large = size[1].split("");

  console.log("small", small);

  console.log("large", large);

  let matches = 0;

  small.forEach((letter) => {
    let indexInLong = large.indexOf(letter);

    if (indexInLong !== -1) {
      matches++;
    }
  });

  let deletions = a.length + b.length - matches * 2;

  return deletions;
};

console.log(makeAnagram("cde", "abc"));
