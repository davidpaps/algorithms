// 1)
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Return the total number of matching pairs of socks that John can sell.

const sockMerchant = (n, ar) => {
  if (n > 1) {
    let counter = {};
    let duplicate = [];
    ar.forEach((element) => {
      if (counter[element] === undefined) {
        counter[element] = 1;
      } else {
        counter[element] += 1;
        if (counter[element] === 2) {
          duplicate.push(element);
          counter[element] = 0;
        }
      }
    });
    return duplicate.length;
  } else {
    return 0;
  }
};
