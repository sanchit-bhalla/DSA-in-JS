class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // DFS Recursively
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; // Inside below IIFE `this` will be undefined

    (function dfs(vertex) {
      if (!vertex) return null;

      result.push(vertex);
      visited[vertex] = true;

      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) dfs(neighbour);
      });
    })(start);

    return result;
  }
}

const g = new Graph();
/*
g.addVertex("Amritsar");
g.addVertex("Delhi");
g.addVertex("LKO");

g.addEdge("Amritsar", "Delhi");
g.addEdge("Delhi", "LKO");
g.addEdge("Amritsar", "LKO");

// g.removeEdge("Amritsar", "LKO")
g.removeVertex("Delhi");
console.log(g);
*/

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");
