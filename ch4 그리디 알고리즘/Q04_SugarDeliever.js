let fs = require("fs");

let input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);
let flag = false;
let result = 0;
while (input >= 0) {
  if (input % 5 === 0 || input === 0) {
    result += parseInt(input / 5);
    flag = true;
    break;
  } else {
    input -= 3;
    result++;
  }
}
if (flag) console.log(result);
else console.log(-1);
