let fs = require("fs");

let [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split(" ");
a = Number(a);
b = Number(b);
let trys = 0;
while (b > a) {
  if (b % 10 == 1) {
    b = (b - 1) / 10;
  } else {
    b = b / 2;
  }
  trys++;
}

if (b == a) console.log(trys + 1);
else console.log(-1);
