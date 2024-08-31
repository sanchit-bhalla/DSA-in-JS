/*
    There are 2 ways of mimic stack functionality using Arrays
        1. push / pop            ---> O(1)
        2. unshift / shift       ---> O(N)
*/

// push / pop --> pushes and pop from end of array
const stack1 = []
stack1.push(1)
stack1.push(2)
stack1.push(3)
console.log(stack1) // [1, 2, 3]
stack1.pop() // 3
stack1.pop() // 2
stack1.pop() // 1
console.log(stack1) // []
stack1.pop() // undefined

// unshift / shift --> add and remove element from start i.e O(N)
const stack2 = []
stack2.unshift(1)
stack2.unshift(2)
console.log(stack2) // [2, 1]
stack2.shift() // 2
console.log(stack2) // [1]
stack2.unshift(3)
stack2.unshift(4)
console.log(stack2) // [4, 3, 1]
stack2.shift() // 4
stack2.shift() // 3
stack2.shift() // 1
stack2.shift() // undefined