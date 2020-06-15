const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
};

myArray = [54, 26, 93, 17, 77, 31, 44, 55, 20];

console.log(insertionSort(myArray));
