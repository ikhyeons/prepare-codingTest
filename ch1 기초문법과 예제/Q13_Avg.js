let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let subject = Number(input[0]);

let score = input[1].split(" ").map(Number);

let max = score[0];

for (let i = 0; i < subject; i++) {
  max = Math.max(max, score[i]);
}

for (let i = 0; i < subject; i++) {
  score[i] = (score[i] / max) * 100;
}

let newSum = 0;
for (let i = 0; i < subject; i++) {
  newSum += score[i];
}

console.log(newSum / subject);
