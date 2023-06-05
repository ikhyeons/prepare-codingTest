let fs = require("fs");

let input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

for (let i = 1; i <= input; i++) {
  let log = "";
  for (let j = 1; j <= i; j++) {
    log += "*";
  }
  console.log(log);
}
