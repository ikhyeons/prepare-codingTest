let fs = require("fs");
let [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

if (N < ((K + 1) * K) / 2) {
  console.log(-1);
} else {
  if ((N - ((K + 1) * K) / 2) % K == 0) {
    console.log(K - 1);
  } else {
    console.log(K);
  }
}
