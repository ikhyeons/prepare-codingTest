let fs = require("fs");

let number = fs.readFileSync("/dev/stdin").toString().split("\n")[0];
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[1];

let result = 0;
for (i = 0; i < number; i++) {
  result += Number(input[i]);
}

console.log(result);
