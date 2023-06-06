// 전형적인 분할 정복 알고리즘임
// logN의 시간 복잡도를 가짐
// 일반적으로 재귀함수를 이용하여 구현함

//일반적으로 재귀함수를 사용한다는 점에서 함수 호출 횟수가 많이 발생함
//이는 오버헤드로 이어질 수 있음.

//분할 : 정렬할 배열을 같은 크기의 부분배열 2개로 분할한다.
//정복 : 부분 배열을 정렬한다. (작게만든 문제를 해결함)
//조합 : 정렬된 부분 배열을 조합한다.

//병합(merge)수행 함수

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    //나눠진 수 중에서 정렬을 시도함
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  } else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

//병합 정렬 함수
function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
