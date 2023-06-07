let fs = require("fs");

let time = fs.readFileSync("/dev/stdin").toString().split("\n")[1].split(" ");

time.map(Number);
time.sort((a, b) => a - b);

result = 0;
for (let i = 0; i < time.length; i++) {
  for (let j = 0; j <= i; j++) {
    result += Number(time[j]);
  }
}
console.log(result);
