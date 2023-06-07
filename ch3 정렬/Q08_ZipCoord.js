let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let dataArr = input[1].split(" ").map(Number); // [2, 4, -10, 4, -9]
let filteredSet = new Set();

for (let i = 0; i < num; i++) {
  filteredSet.add(dataArr[i]);
}

let filteredArr = Array.from(filteredSet);

let sortedArr = filteredArr.sort((a, b) => a - b); // [-10, -9, 2, 4]

let map = new Map();

for (let i = 0; i < sortedArr.length; i++) {
  map.set(sortedArr[i], i);
}

let result = "";
for (let i = 0; i < dataArr.length; i++) {
  result += map.get(dataArr[i]) + " ";
}

console.log(result);
