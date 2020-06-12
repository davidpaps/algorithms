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

// Example
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  Object.keys(stations).forEach((station) => {
    const states = stations[station];
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });
  statesNeeded = new Set(
    [...statesNeeded].filter((x) => !statesCovered.has(x))
  );
  finalStations.add(bestStation);
}

console.log(finalStations);
