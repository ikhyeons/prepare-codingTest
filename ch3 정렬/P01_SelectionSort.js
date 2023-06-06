//매 단계에서 가장 작은 원소를 선택하여 앞으로 보내는 것
//시간 복잡도 O(n^2)

// 각 단계에서 가장 작은 원소를 선택
// 처리되지 않은 원소들 중 가장 앞의 원소와 위치를 교체함

//배열이 정렬되어있든, 되어있지 않든 모든 횟수를 반복함
//[2, 4, 3, 1, 9, 6, 8, 7, 5]

const arr = [2, 4, 3, 1, 9, 6, 8, 7, 5];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

selectionSort(arr);
console.log(arr);
