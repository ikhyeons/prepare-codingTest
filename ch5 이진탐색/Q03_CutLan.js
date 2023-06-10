let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [line, N] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= line; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = arr.reduce((res, cur) => Math.max(res, cur));
let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let Lans = 0;
  for (x of arr) {
    if (parseInt(x / mid) >= 1) {
      Lans += parseInt(x / mid);
    }
  }
  if (Lans >= N) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
