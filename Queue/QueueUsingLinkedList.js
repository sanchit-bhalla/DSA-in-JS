/*
    It is more optimized i.e  insertion and removal has complexity of O(1) 
    BIG O
        Insertion  --> O(1)
        Removal    --> O(1)
        Searching  --> O(N)
        Access     --> O(N)
*/

class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(val){
        const newNode = new Node(val)
        if(!this.head){ // if(this.size === 0)
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        return ++this.size
    }

    dequeue(){
        if(!this.head) return null
        
        const temp = this.head
        if(this.head === this.tail){ // or this.size === 1
            this.tail = null
        }
        this.head = this.head.next
        this.size--
        return temp.value
    }
}

const queue = new Queue()
 queue.enqueue("first") // 1
 queue.enqueue("second") // 2
 queue.enqueue("third") // 3
 console.log(queue) // ['first', 'second', 'third']
 queue.dequeue() // "first"
 queue.dequeue() // "second"
 queue.dequeue() // "third"
 console.log(queue) // []
 queue.dequeue() // null
 