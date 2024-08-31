/*
    STACK 
        - Follows LIFO (Last In First Out) structure
        - Used for 
            - Function invocations (call stack)
            - Undo/Redo operations
            - In routing (going forward and backward)
    BIG O
        Insertion  --> O(1)
        Removal    --> O(1)
        Searching  --> O(N)
        Access     --> O(N)
*/
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    
    push(val){
        const newNode = new Node(val)
        if(this.size === 0){ // or if(!this.first)
            this.first = newNode
            this.last = newNode
        } else{
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }

    pop(){
        if(!this.first)  // or if(this.size === 0)
            return null
        let temp = this.first
        if(this.first === this.last)
            this.last = null
        this.first = this.first.next
        this.size--
        return temp.value
    }
}