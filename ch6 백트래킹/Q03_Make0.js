let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);

let Tarr = [];
for (i = 1; i <= T; i++) Tarr.push(Number(input[i]));

let result = "";
let makeSolve = [1];
let op = [" ", "+", "-"];

function dfs(arr, depth) {
  if (depth == arr.length) {
    let answer = eval(makeSolve.join("").split(" ").join(""));

    if (answer === 0) {
      result += makeSolve.join("");
      result += "\n";
    }
    return;
  }

  for (let oper of op) {
    makeSolve.push(oper);
    makeSolve.push(arr[depth]);
    dfs(arr, depth + 1);
    makeSolve.pop();
    makeSolve.pop();
  }
}

for (let Test of Tarr) {
  let number = []; // 숫자 배열 [1, 2, 3, 4, 5, 6, 7]
  for (let i = 1; i <= Test; i++) number.push(i);

  dfs(number, 1);
  result += "\n";
}

console.log(result);
