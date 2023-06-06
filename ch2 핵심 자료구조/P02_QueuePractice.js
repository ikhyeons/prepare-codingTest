// 먼저 들어온 데이터가 먼저 추출되는 구조
// 꼬리에서 새로운 데이터가 들어갔다가 머리에서 삭제됨

//삽입(3) - 삽입(5) - 삭제() - 삽입(7) - 삽입(8) - 삭제() - 삽입(2) - 삽입(9)
// Class로 직접 구현
class Queue {
  constructor() {
    // 구조를 생성
    this.items = {}; // 현재 아이템들
    this.headIndex = 0; // 큐에서 빠져나가는 부분
    this.tailIndex = 0; // 큐에서 들어오는 부분
  }
  enqueue(item) {
    this.items[this.tailIndex] = item; // 받은 아이템을 큐의 테일 인덱스 부분에 삽입하고
    this.tailIndex++; // 다음 들어올 아이템을 위해 tailIndex를 하나 늘림
  }
  dequeue() {
    const item = this.items[this.headIndex]; // 나갈 아이템을 현재 큐의 헤드인덱스의 아이템으로 설정하고
    delete this.items[this.headIndex]; // 헤드 아이템을 삭제함
    this.headIndex++; // 바로 다음 아이템을 그다음 빠져나갈 헤드 아이템으로 지정
    return item; // 빠져나간 아이템의 값을 출력함.
  }
  peek() {
    // 현재 헤드인덱스에 있는 아이템을 출력함
    return this.items[this.headIndex];
  }
  getLength() {
    // 전체 큐의 길이를 출력함
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();
// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}
