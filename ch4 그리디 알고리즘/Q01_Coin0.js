let fs = require("fs");
let [N, K] = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split(" ");

let value = [];

N = Number(N);
K = Number(K);

for (let i = 1; i <= N; i++) {
  value.push(fs.readFileSync("/dev/stdin").toString().split("\n")[i]);
}

value = value.map(Number);
let coins = 0;
for (let i = N - 1; i >= 0; i--) {
  coins += parseInt(K / value[i]);
  K = K % value[i];
}

console.log(coins);
