let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let meetings = input[0];
let meetingArr = [];
for (let i = 1; i <= meetings; i++) {
  meetingArr.push(input[i].split(" ").map(Number));
}

meetingArr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let lastEnd = meetingArr[0][1];
let can = 1;

for (let i = 1; i < meetingArr.length; i++) {
  if (meetingArr[i][0] >= lastEnd) {
    lastEnd = meetingArr[i][1];
    can++;
  }
}

console.log(can);
