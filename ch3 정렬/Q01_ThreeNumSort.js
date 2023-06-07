let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

let arr = input.split(" ");

arr.sort((a, b) => a - b);

console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);
