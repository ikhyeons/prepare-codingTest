let fs = require("fs");
let [num1, num2] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ");

let newNum1 = Number(`${num1[2]}${num1[1]}${num1[0]}`);

let newNum2 = Number(`${num2[2]}${num2[1]}${num2[0]}`);

max = Math.max(newNum1, newNum2);

console.log(max);
