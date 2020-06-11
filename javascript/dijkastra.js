"use strict";

const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

const parents = {};
parents.a = "start";
parents.b = "start";
parents.fin = null;

let processed = [];

const findLowestCostNode = (itCosts) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach((node) => {
    const cost = itCosts[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((n) => {
    const newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  });

  processed = processed.concat(node);

  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node and to the finish:");
console.log(costs);
