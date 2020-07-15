"use strict";

// 13)
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// After the jumps from the starting position have been executed, print "YES" if the kangeroos end up at the same point after the same amount of jumps, and print "NO" if they do not

// kangaroo has the following parameter(s):
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// E.g: 0, 3, 4, 2 => YES

const kangarooJump = (x1, v1, x2, v2) => {
  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return "NO";
  } else {
    let kangA = x1 + v1;
    let kangB = x2 + v2;
    for (let i = 1; i < 1000; i++) {
      if (kangA * (v1 * i) === kangB * (v2 * i)) {
        return "YES";
      } else {
        return "NO";
      }
    }
  }
};

console.log(kangarooJump(1, 3, 4, 2));

// Regardless of the amount of jumps - if the kangeroos will land in the same place:

const kangaroo = (x1, v1, x2, v2) => {
  let aJumps = [];
  let bJumps = [];

  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return "NO";
  } else {
    let kangA = x1 + v1;
    let kangB = x2 + v2;

    for (let i = 1; i < 100; i++) {
      let ajump = kangA + v1 * i;
      aJumps.push(ajump);
      let bjump = kangB + v2 * i;
      bJumps.push(bjump);
    }

    let include = aJumps.filter((element) => bJumps.includes(element));

    if (include) {
      return "YES";
    } else {
      return "NO";
    }
  }
};

console.log(kangaroo(0, 2, 5, 3));
