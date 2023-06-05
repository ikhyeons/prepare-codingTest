let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

let [dice1, dice2, dice3] = input.split(" ");

function getMax(a, b, c) {
  let array = [a, b, c];
  return array.reduce((result, data) => {
    return result > data ? result : data;
  });
}

function getSame(a, b, c) {
  if (a === b) return a;
  if (b === c) return b;
  if (c === a) return c;
}

if (dice1 === dice2 && dice2 === dice3 && dice3 === dice1) {
  console.log(10000 + Number(dice1) * 1000);
} else if (dice1 === dice2 || dice2 === dice3 || dice3 === dice1) {
  console.log(1000 + Number(getSame(dice1, dice2, dice3)) * 100);
} else {
  console.log(Number(getMax(dice1, dice2, dice3)) * 100);
}
