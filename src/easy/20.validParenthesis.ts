// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const isValid = (string: string): boolean => {
  if (string.length % 2 !== 0) return false;
  const map: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack: string[] = [];
  for (const char of string) {
    if (map[char]) {
      console.log(char);
      stack.push(char);
    } else if (char !== map[stack[stack.length - 1]]) return false;
    else stack.pop();
  }
  return stack.length === 0;
};

console.log(isValid("({})"));

function isValid2(s: string): boolean {
  const bracketsMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (["(", "[", "{"].includes(currentBracket)) stack.push(currentBracket);
    else if (stack.pop() !== bracketsMap[currentBracket]) return false;
  }
  return stack.length == 0;
}

console.log(isValid2("({[{}]})"));

function isValid3(s: string) {
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (last === undefined || map.get(last) !== s[i]) return false;
    }
  }
  return stack.length == 0;
}

console.log(isValid3("[]"));
