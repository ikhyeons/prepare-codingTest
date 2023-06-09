let fs = require("fs");

let bank = fs.readFileSync("/dev/stdin").toString().split("\n")[0];
let line = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);

let Node = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[2]
  .split(" ")
  .map(Number);

let currentPay = Node[0];
let totalPay = 0;
for (let i = 0; i < bank; i++) {
  if (currentPay > Node[i]) {
    currentPay = Node[i];
  }
  if (i == bank - 1) break;
  totalPay += currentPay * line[i];
}
console.log(totalPay);
