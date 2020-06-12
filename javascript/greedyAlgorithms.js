let fruits = new Set(["avocado", "tomato", "banana"]);
let vegetables = new Set(["beets", "carrots", "tomato"]);

// Union
const union = (setA, setB) => {
  let setC = new Set();

  for (let element of setA) {
    setC.add(element);
  }
  for (let element of setB) {
    setC.add(element);
  }
  return setC;
};

console.log(union(fruits, vegetables));

// Intersection
const intersection = (setA, setB) => {
  let setC = new Set();

  for (let element of setB) {
    if (setA.has(element)) {
      setC.add(element);
    }
  }
  return setC;
};

console.log(intersection(fruits, vegetables));

// Difference
const difference = (setA, setB) => {
  let setC = new Set(setA);

  for (let element of setB) {
    setC.delete(element);
  }
  return setC;
};

console.log(difference(fruits, vegetables));
console.log(difference(vegetables, fruits));
