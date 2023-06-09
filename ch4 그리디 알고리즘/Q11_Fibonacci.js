let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let t = input[0];

for (let i = 1; i <= t; i++) {
  let result = "";
  let resultArr = [];
  let data = Number(input[i]); // 만들 숫자
  let fib = [0, 1]; // 피보나치 수열

  while (fib[fib.length - 1] <= data) {
    // 피보나치 수열을 data보다 작을 때 까지 집어넣음
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  fib.pop();
  // 피보나치 생성 완료

  for (let j = fib.length - 1; j > 0; j--) {
    if (data >= fib[j]) {
      resultArr.push(fib[j]);
      data -= fib[j];
    }
  }

  for (let j = resultArr.length - 1; j >= 0; j--) {
    result += resultArr[j] + " ";
  }

  console.log(result);
}
