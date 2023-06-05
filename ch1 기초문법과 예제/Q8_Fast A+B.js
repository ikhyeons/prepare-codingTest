let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let T = input[0];

let output = "";
for (let i = 1; i <= T; i++) {
  let result = input[i].split(" ");
  let resultData = Number(result[0]) + Number(result[1]);
  output += `${resultData}\n`;
}

console.log(output);
