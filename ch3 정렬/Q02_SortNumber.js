let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = input.map(Number);
let length = arr[0];

let resultArr = [];
let result = "";

for (let i = 1; i <= length; i++) {
  resultArr.push(input[i]);
}
resultArr.sort((a, b) => a - b);

for (let i = 0; i < resultArr.length; i++) {
  result += resultArr[i] + "\n";
}
console.log(result);
