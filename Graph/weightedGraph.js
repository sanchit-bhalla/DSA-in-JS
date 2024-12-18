class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new MinPriorityQueue();
    const distances = {};
    const previous = {};
    const path = []; // store shortest path from start to finish

    // build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (!nodes.empty()) {
      // Pick node with smallest distance(priority) from source
      let node = nodes.dequeue().val;

      if (node === finish) {
        // console.log({ distances, previous, start, finish });
        // Build Path from start to finish
        while (previous[node]) {
          path.push(node);
          node = previous[node];
        }
        path.push(node); // or path.push(start)
        break;
      }

      for (const adjacent of this.adjacencyList[node]) {
        const adjNode = adjacent.node;
        const edgeWeight = adjacent.weight;

        if (distances[node] + edgeWeight < distances[adjNode]) {
          distances[adjNode] = distances[node] + edgeWeight;
          previous[adjNode] = node;
          nodes.enqueue(adjNode, distances[adjNode]);
        }
      }
    }

    return path.reverse();
  }
}

// Simple but bad Priority Queue implementation bcz its complexity is high
/*
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // O(N * log N)
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  empty() {
    return this.values.length === 0;
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
*/

// Optimal Min Priority queue implementation using heap
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

  empty() {
    return this.values.length === 0;
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
      idx = parentIdx;
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

const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

console.log(wg.Dijkstra("A", "E"));
