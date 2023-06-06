//인접한 두 원소를 비교하여 정렬이 안되어 있다면 위치를 서로 변경한다.
//한 번의 단계가 수행되면 가장 큰 원소가맨 뒤로 이동함
// [9, 8, 2, 4, 3]

const arr = [9, 8, 2, 4, 3];

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
bubbleSort(arr);
console.log(arr);
