let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let cards = input[0];
let cardArr = input[1].split(" ").map(Number);
let myCards = input[2];
let myCardArr = input[3].split(" ").map(Number);

cardArr.sort((a, b) => a - b);
let result = "";
for (let i = 0; i < myCards; i++) {
  result += countByRange(cardArr, myCardArr[i], myCardArr[i]) + " ";
}
console.log(result);

function lowerBound(arr, target, startI, endI) {
  while (startI < endI) {
    let midI = parseInt((startI + endI) / 2);
    if (arr[midI] >= target) endI = midI;
    else startI = midI + 1;
  }
  return endI;
}

function upperBound(arr, target, startI, endI) {
  while (startI < endI) {
    let midI = parseInt((startI + endI) / 2);
    if (arr[midI] > target) endI = midI;
    else startI = midI + 1;
  }
  return endI;
}

function countByRange(arr, startValue, endValue) {
  let rightIndex = upperBound(arr, endValue, 0, arr.length);
  let leftIndex = lowerBound(arr, startValue, 0, arr.length);
  return rightIndex - leftIndex;
}
