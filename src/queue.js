let queue = []

// if first in is at the end of array use POP & UNSHIFT //
// enqeueu
console.log(queue.unshift("apple"))
console.log(queue.unshift("lol", 'yes'))
console.log(queue)

// peek() first item
console.log(queue[queue.length -1])

// dequeue
console.log(queue.pop())

// isEmpty
console.log(queue.length === 0)
console.log('\n')

// if first in is at the beggining of array use PUSH & SHIFT //

let queue2 = []

// enqeueu
console.log(queue2.push('1st','2nd','3rd'))
console.log(queue2.push('4th','5th'))
console.log(queue2)

// dequeue
console.log(queue2.shift())


// peek() first item
console.log(queue2[0])
