let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 0;
let end = arr.reduce((result, crt) => Math.max(result, crt));
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let sum = 0;
  for (x of arr) {
    sum += Math.min(x, mid);
  }
  if (sum <= m) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
