let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let array = input[1].split(" ");

let max = array[0];
let min = array[0];

array.map((data) => {
  Number(data) > max ? (max = Number(data)) : null;
  Number(data) < min ? (min = Number(data)) : null;
});

console.log(min, max);
