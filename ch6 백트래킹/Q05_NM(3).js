let fs = require("fs");
let [n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let data = [];

for (let i = 1; i <= n; i++) data.push(i);

let selected = [];
let result = "";
function dfs(arr, depth) {
  if (depth == m) {
    for (let i = 0; i < selected.length; i++) {
      result += selected[i] + " ";
    }
    result += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(arr[i]);
    dfs(arr, depth + 1);
    selected.pop();
  }
}
dfs(data, 0);
console.log(result);
