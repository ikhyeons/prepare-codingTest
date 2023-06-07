//숫자 오름차순 (a, b)=> return a - b
//숫자 내림차순 (a, b)=> return b - a

//문자열 사전 오름차순 (a, b) => if(a>b) return 1 else if (b>a) return -1 else return 0
//문자열 사전 내림차순 (a, b) => if(a<b) return 1 else if (b<a) return -1 else return 0

//리턴값이 -1 a의 우선순위가 높다고 판단
//리턴값이 1 b의 우선순위가 높다고 판단
//리턴값이 0 변동없음

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

let dataSet = new Set();
for (i = 1; i <= num; i++) {
  dataSet.add(input[i]);
}
let data = Array.from(dataSet);

data.sort((a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }
});

result = "";
for (let i = 0; i < data.length; i++) {
  result += data[i] + "\n";
}
console.log(result);
