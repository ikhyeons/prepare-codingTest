let fs = require("fs");

let input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);
let i = 1;
while (1) {
  if (input < i) {
    console.log(i - 1);
    break;
  }
  input -= i;
  i++;
}
