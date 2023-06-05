let fs = require("fs");

let test = fs.readFileSync("/dev/stdin").toString().split("\n")[0];

for (let i = 1; i <= test; i++) {
  let lineArray = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    [i].split(" ");

  let string = "";
  for (let j = 0; j < lineArray[1].length; j++) {
    for (let k = 1; k <= Number(lineArray[0]); k++) {
      string += lineArray[1][j];
    }
  }
  console.log(string);
}
