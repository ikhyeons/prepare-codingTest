let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let balloonNum = Number(input[0]);
let array = input[1].split(" ").map(Number);

let cnt = 0;
let arrow = new Array(balloonNum + 1).fill(0);

for (let x of array) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    cnt++;
    arrow[x - 1] += 1;
  }
}

console.log(cnt);
