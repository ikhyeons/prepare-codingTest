let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);
let currentLine = 1;
for (let i = 0; i < T; i++) {
  let people = Number(input[currentLine]); //7
  let can = Number(input[currentLine]); //7
  let dataArr = [];

  for (let j = 0; j < people; j++) {
    dataArr.push({
      test1: Number(input[currentLine + j + 1].split(" ")[0]),
      test2: Number(input[currentLine + j + 1].split(" ")[1]),
    });
  }

  dataArr.sort((a, b) => a.test1 - b.test1); // 오름차순 정렬 NlogN

  let min = dataArr[0].test2;
  for (let k = 1; k < dataArr.length; k++) {
    if (min > dataArr[k].test2) {
      min = dataArr[k].test2;
    } else {
      can--;
    }
  }

  console.log(can);
  currentLine += people + 1;
}
