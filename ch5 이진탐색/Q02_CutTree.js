let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [treeNum, meter] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 0;
let end = arr.reduce((res, cur) => Math.max(res, cur));

let result = 0;

while (start <= end) {
  let getTotal = 0;
  let mid = parseInt((start + end) / 2);
  for (x of arr) {
    if (x - mid > 0) {
      getTotal += x - mid;
    }
  }

  if (getTotal >= meter) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
