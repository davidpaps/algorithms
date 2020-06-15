"use strict";

const letters = {};
letters.A = ["B", "S"];
letters.B = ["A"];
letters.C = ["D", "E", "F", "S"];
letters.D = ["C"];
letters.E = ["C", "H"];
letters.F = ["C", "G"];
letters.G = ["F", "S"];
letters.H = ["E", "G"];
letters.S = ["A", "C", "G"];

console.log(letters);

const dfs = () => {};
