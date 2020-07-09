"use strict";

// 1)
// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting.
// He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note.
// The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Return Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// E.g: Note =  "Attack at dawn"  Magazine = "attack at dawn" => No

const checkMagazine = (mag, note) => {
  let magazine = mag.split(" ");
  let ransom = note.split(" ");
  let tracker = {};

  for (let i = 0; i < magazine.length; i++) {
    if (!tracker[magazine[i]]) {
      tracker[magazine[i]] = 0;
    }
    tracker[magazine[i]]++;
  }

  for (let i = 0; i < ransom.length; i++) {
    if (tracker[ransom[i]]) {
      tracker[ransom[i]]--;
    } else {
      return "No";
    }
  }

  return "Yes";
};

console.log(checkMagazine("attack at dawn", "Attack at dawn"));
