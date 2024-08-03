const isValid = (string: string): boolean => {
  if (string.length % 2 === 0) return false;
  const map: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack: string[] = [];
  for (const char of string) {
    const a = map[char];
    if (map[char]) {
      const b = map[stack[stack.length - 1]];
      stack.push(char);
    } else if (char !== map[stack[stack.length - 1]]) return false;
    else stack.pop();
  }
  return stack.length === 0;
};

console.log(isValid("({}){"));
