/*
    Priority Queues is an abstract concept. It can be implemented by various ways eg using Arrays
    Most common and effecient way to implement priority queue is by using `Binary Heaps`

    Min Priority Queue
        - use min binary heap
        - lower number means high priority

    Time Complexity
        Insertion - O(log2 N)
        Removal   - O(log2 N)
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MinPriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority <= element.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx
    }
  }

  // extract element with minimum priority
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.downHeapify();
    }
    return min;
  }

  // downHeapify / sinkDown / trickle down / bubble down
  downHeapify() {
    let idx = 0;
    const element = this.values[idx];
    const length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new MinPriorityQueue();
ER.enqueue("high fever", 4);
ER.enqueue("cough", 5);
ER.enqueue("gun shot", 1);
ER.enqueue("covid", 2);
ER.enqueue("broken arm", 3);

console.log(ER.dequeue());
