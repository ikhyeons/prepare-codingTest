let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

let data = Number(input);

let result = 0;
for (let i = 1; i <= data; i++) {
  result += i;
}

console.log(result);
