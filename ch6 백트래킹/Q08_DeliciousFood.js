let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);

data = [];
for (let i = 1; i <= N; i++) {
  data.push({
    S: input[i].split(" ").map(Number)[0],
    B: input[i].split(" ").map(Number)[1],
  });
}

let stack = [];

let result = 1e9;

let visited = new Array(N).fill(false);

function dfs(arr, depth) {
  if (depth >= 1) {
    let Sresult = 1;
    let Bresult = 0;
    for (let x of stack) {
      Sresult *= x.S;
      Bresult += x.B;
    }

    result = Math.min(result, Math.abs(Sresult - Bresult));
  }

  for (let i = 0; i < data.length; i++) {
    if (visited[i]) continue;
    stack.push({ S: data[i].S, B: data[i].B });
    visited[i] = true;
    dfs(arr, depth + 1);
    visited[i] = false;
    stack.pop();
  }
}
dfs(data, 0);
console.log(result);
