let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("/n");

const data = Number(input[0]);

function score(score) {
  result = "";
  if (score >= 90) {
    result = "A";
  } else if (score >= 80) {
    result = "B";
  } else if (score >= 70) {
    result = "C";
  } else if (score >= 60) {
    result = "D";
  } else {
    result = "F";
  }

  return result;
}

console.log(score(data));
