let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0];

let data = [];

for (let i = 1; i <= line; i++) {
  data.push({ age: input[i].split(" ")[0], name: input[i].split(" ")[1] });
}

data.sort((a, b) => {
  if (a.age != b.age) {
    return a.age - b.age;
  } else return 0;
});

let result = "";
for (let i = 0; i < line; i++) {
  result += data[i].age + " " + data[i].name + "\n";
}

console.log(result);
