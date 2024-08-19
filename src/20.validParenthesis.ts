// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const isValid = (string: string): boolean => {
  if (string.length % 2 === 0) return false;
  const map: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack: string[] = [];
  for (const char of string) {
    if (map[char]) {
      stack.push(char);
    } else if (char !== map[stack[stack.length - 1]]) return false;
    else stack.pop();
  }
  return stack.length === 0;
};

console.log(isValid("({}){"));

function isValid2(s: string): boolean {

  const bracketsMap = {
      ')': '(',
      ']': '[',
      '}': '{'
  }

  let openBracketsStack = []

  for (let i = 0; i < s.length; i++) {
      const currentBracket = s[i]


      if (['(', '[', '{'].includes(currentBracket)) {
          openBracketsStack.push(currentBracket)
      } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
          return false
      }
  }
  return !openBracketsStack.length
};

console.log(isValid2("({})"));