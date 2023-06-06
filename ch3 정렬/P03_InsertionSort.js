//각 숫자를 적절한 위치에 삽입하는 정렬 기법
//각 단계에서 현재 원소가 삽입될 위치를 찾음
//적절란 위치에 도달할 때까지 반복적으로 왼쪽으로 이동한다.

let arr = [1, 0, 5, 4, 8, 4, 6, 4, 3, 1, 2];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        //한 칸씩 왼조기으로 이동
        //바꾸기
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        //자기보다 작은 데이터를 만나면 멈춤
        break;
      }
    }
  }
}

insertionSort(arr);
console.log(arr);
