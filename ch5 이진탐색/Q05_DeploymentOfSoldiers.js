let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let soldier = input[1].split(" ").map(Number);

let last = [0];
soldier.reverse();

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (x of soldier) {
  if (last[last.length - 1] < x) {
    last.push(x);
  } else {
    let index = lowerBound(last, x, 0, last.length);
    last[index] = x;
  }
}

console.log(num - (last.length - 1));
