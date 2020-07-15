"use strict";

// 11)
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first,
// assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// catAndMouse has the following parameter(s):
// x: an integer, Cat A's position
// y: an integer, Cat B's position
// z: an integer, Mouse C's position

// If cat A catches the mouse first, print 'Cat A'.
// If cat B catches the mouse first, print 'Cat B'.
// If both cats reach the mouse at the same time, print 'Mouse C' as the two cats fight and mouse escapes.

// E.g: 1, 2, 3 => Cat B

const catAndMouse = (x, y, z) => {
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);
  if (catA === catB) {
    return "Mouse C";
  } else if (catA > catB) {
    return "Cat B";
  } else {
    return "Cat A";
  }
};

console.log(catAndMouse(1, 2, 3));
