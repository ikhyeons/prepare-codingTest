let fs = require("fs");
let [n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let lastCheck = [0];
let selected = [];

let data = [];
for (let i = 1; i <= n; i++) data.push(i);

let result = "";
function dfs(arr, depth) {
  if (depth == m) {
    for (x of selected) {
      result += x + " ";
    }
    result += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= lastCheck[lastCheck.length - 1]) {
      selected.push(arr[i]);
      lastCheck.push(arr[i]);
      dfs(arr, depth + 1);
      lastCheck.pop();
      selected.pop();
    }
  }
}

dfs(data, 0);
console.log(result);
