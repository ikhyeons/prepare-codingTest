let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let wordNum = input[0];

let groupNum = 0;

for (let i = 1; i <= wordNum; i++) {
  let word = input[i];
  let before = "";

  let mySet = new Set();
  let isGroup = 1;
  for (let j = 0; j < word.length; j++) {
    if (word[j] != before) {
      if (mySet.has(word[j])) {
        isGroup = 0;
      }
    }
    before = word[j];
    mySet.add(word[j]);
  }

  isGroup === 1 && groupNum++;
}

console.log(groupNum);
