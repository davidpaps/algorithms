"use strict";

// 8)
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// E.g: 07:05:45PM => 19:05:45
// E.g: 07:05:45AM => 07:05:45

const timeConversion = (s) => {
  if (s[0] === "1" && s[1] === "2" && s[8] === "A") {
    return `00:${s[3]}${s[4]}:${s[6]}${s[7]}`;
  } else if (s[0] === "1" && s[1] === "2" && s[8] === "P") {
    return s.slice(0, -2);
  } else if (s[8] === "A") {
    return s.slice(0, -2);
  } else {
    let num = s[0] + s[1];
    let int = parseInt(num) + 12;
    let str = int.toString();
    let arr = s.split("");
    arr.splice(0, 2, str[0], str[1]);
    let string = arr.join("").slice(0, -2);
    return string;
  }
};

console.log(timeConversion("07:04:45PM"));
console.log(timeConversion("07:04:45AM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("09:42:24PM"));
console.log(timeConversion("12:40:22AM"));
