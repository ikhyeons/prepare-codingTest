let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[0];

function palindrome(x) {
  // 회문인지 확인하는 로직
  return x == x.split("").reverse().join("");
}

for (let i = 1; i <= N; i++) {
  let data = input[i];
  if (palindrome(data)) console.log(0);
  else {
    let isFound = false;
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] != data[data.length - 1 - j]) {
        let deletedString1 = data.slice(0, j) + data.slice(j + 1, data.length);
        if (palindrome(deletedString1)) {
          isFound = true;
        }
        let deletedString2 =
          data.slice(0, data.length - j - 1) +
          data.slice(data.length - j, data.length);
        if (palindrome(deletedString2)) {
          isFound = true;
        }
        break;
      }
    }
    if (isFound) console.log(1);
    else console.log(2);
  }
}
