const mergeSort = (array) => {
  if (array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let sortedLeftArray = mergeSort(array.slice(0, mid));
  let sortedRightArray = mergeSort(array.slice(mid, array.length));
  return mergeArrays(sortedLeftArray, sortedRightArray);

  function mergeArrays(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
};

let myArray = [12, 54, 6, 3, 45, 789, 11];
console.log(mergeSort(myArray));
