let fs = require("fs");
let input = String(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

input = input.split("");

input.sort((a, b) => {
  return Number(b) - Number(a);
});
result = "";

for (let i = 0; i < input.length; i++) {
  result += String(input[i]);
}
console.log(result);
