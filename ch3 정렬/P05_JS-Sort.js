//자바스크립트에서 기본적으로 제공하는 정렬 라이브러리도 NlogN을 보여준다
//sort()함수를 제공함, sort()함수의 사용이 제한된다면 병합 정렬과 같은 알고리즘을 직접 구현하여 사용하자.

//sort()는 정렬 기준을 설정할 수 있다.
//arr.sort(compareFunction);

//만약 오름차순일 경우 a-b qksghksrkqt / - 면 a가 우선순위가 높음, + 면 b 0은, 교환안함

//정렬 기준함수를 사용하지 않으면 각 원소는 문자열로 취급됨. → 유니코드 값 순서대로 정렬 됨

let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

function comapare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

arr.sort(comapare);
console.log(arr);

//문자열에 대한 오름차순 정렬 예지

let arr2 = ["fineapple", "banan", "durian", "apple", "carrot"];

arr2.sort();
console.log(arr2);

//대소문자의 구별을 방지
let arr3 = ["fineapple", "banan", "durian", "apple", "carrot"];

function compare2(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = a.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}

arr3.sort(compare2);
console.log(arr3);

//객체 배열도 적용이 가능하다.
