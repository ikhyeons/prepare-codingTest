let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

let wordNum = input.trim().split(" ").length;

input.trim() == "" ? console.log(0) : console.log(wordNum);
