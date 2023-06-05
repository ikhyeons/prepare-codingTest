let fs = require("fs");

let input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
