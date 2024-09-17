/*
  Time Complexity of Binary Heaps
    Insertion - O(log2 N)
    Removal   - O(log2 N)
    Search    - O(N),  Binary heaps are not optimized for searching.
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);

    // Bubble up (Up Heapify)
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= element) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // remove(){
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
        this.values[0] = end;

        // downHeapify / trickle down / bubble down
        this.downHeapify();
    }


    return max;
  }

  downHeapify() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      // swap with larger child if it is greater than element
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIdx
      }

      if(swap === null) break

      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

const heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)

console.log(heap.extractMax())