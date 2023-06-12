let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let priceTable = [];
for (let i = 1; i <= n; i++) priceTable.push(input[i].split(" ").map(Number));

let result = 0;
let visited = new Array(n).fill(false); // 방문여부
let data = []; //돌릴 어레이
for (let i = 0; i < n; i++) data.push(i);
let path = []; // 지나간 경로
let price = []; // 순회하는데 걸리는 총 비용
function dfs(arr, depth) {
  if (depth == n) {
    if (!(priceTable[path[path.length - 1]][path[0]] == 0)) {
      price.push(priceTable[path[path.length - 1]][path[0]]);
      let value = 0;
      for (let x of price) value += x;
      if (result == 0) {
        result = value;
      } else {
        result = Math.min(result, value);
      }

      price.pop();
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (path.length == 0) {
      path.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      visited[i] = false;
      path.pop();
    } else {
      if (visited[i] == true || priceTable[path[path.length - 1]][i] == 0)
        continue;

      price.push(priceTable[path[path.length - 1]][i]);
      path.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      visited[i] = false;
      path.pop();
      price.pop();
    }
  }
}

dfs(data, 0);
console.log(result);
