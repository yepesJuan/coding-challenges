function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return prefix;
    }
  }

  return prefix;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight, florida"]));

function longestCommonPrefixVertical(strs: string[]): string {
  if (strs.length === 0) return "";
  const minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      const a = strs[j];
      const b = strs[j][i];
      if (strs[j][i] !== char) {
        const c = strs[0].slice(0, i);
        const d = 0;
        return c;
      }
    }
  }

  return strs[0].slice(0, minLength);
}

console.log(longestCommonPrefixVertical(["flower", "flow", "flight"]));
