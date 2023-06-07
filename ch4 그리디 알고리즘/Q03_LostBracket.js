let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

input = input.split("-");

let result = 0;

for (let i = 0; i < input.length; i++) {
  let addArr = input[i].split("+").map(Number);

  if (i == 0) {
    result += addArr.reduce((result, current) => result + current, 0);
  } else {
    result -= addArr.reduce((result, current) => result + current, 0);
  }
}

console.log(result);
