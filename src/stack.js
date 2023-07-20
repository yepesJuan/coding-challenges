let stack = []
 
console.log(stack.push("apple",1, true,))
console.log(stack)

// peek() top item
console.log(stack[stack.length -1])

// isEmpty
console.log(stack.length === 0)

// reverse a string using a stack
function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack'));

