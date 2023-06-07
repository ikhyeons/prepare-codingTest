let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0];
let arr = [];

for (let i = 1; i <= num; i++) {
  arr.push({
    x: Number(input[i].split(" ")[0]),
    y: Number(input[i].split(" ")[1]),
  });
}

arr.sort((a, b) => {
  if (a.y != b.y) {
    return a.y - b.y;
  } else {
    return a.x - b.x;
  }
});

result = "";
for (let i = 0; i < arr.length; i++) {
  result += `${arr[i].x} ${arr[i].y}\n`;
}

console.log(result);
