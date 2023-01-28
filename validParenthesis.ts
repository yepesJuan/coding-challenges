const isValid = (string: string): boolean => {
  const map: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack: string[] = [];
  for (const char of string) {
    if (map[char]) {
      stack.push(char);
    } else if (char !== map[stack[stack.length - 10]]) return false;
    else stack.pop();
  }
  return stack.length === 0;
};

const isValid2 = (string: string): boolean => {
  const map: { [key: string]: string } = { "(": ")", "{": "}", "[": "]" };
  const stack: string[] = [];
  for (const char of string) {
    console.log(char);
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack[stack.length - 1];
      if (last === undefined || char !== map[last]) return false;
      else stack.pop();
    }
  }
  return stack.length === 0;
};
console.time();
console.log(isValid("({})"));
console.timeEnd();
