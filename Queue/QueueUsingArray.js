/*
    QUEUE 
        - Follows FIFO (First In First Out) structure
        - Used for 
            - Callback queues in the Eventloop
            - SQS (Simple Queue Service) @AWS
    
        QUEUE using Array 
            - push / shift
            - unshift / pop
        Big O
            - push     --> O(1)
            - shift    --> O(N)
            - unshift  --> O(N)
            - pop      --> O(1)
*/

// Using push / shift
 const queue = []
 queue.push("first") // 1
 queue.push("second") // 2
 queue.push("third") // 3
 console.log(queue) // ['first', 'second', 'third']
 queue.shift() // "first"
 queue.shift() // "second"
 queue.shift() // "third"
 console.log(queue) // []
 queue.shift() // undefined
 
 // Using unshift / pop
 const queue2 = []
 queue2.unshift("first") // 1
 queue2.unshift("second") // 2
 queue2.unshift("third") // 3
 console.log(queue2) // ['first', 'second', 'third']
 queue2.pop() // "first"
 queue2.pop() // "second"
 queue2.pop() // "third"
 console.log(queue2) // []
 queue2.pop() // undefined