// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
function firstUniqChar(s: string): any {
  const occurences = new Map();
  let i = 1;

  for (const num of s) {
    if (occurences.has(num)) i++;
    occurences.set(num, i); // we can use this (occurences.get(s[i]) || 0) + 1) instead of i to keep track of occurences value
    i = 1;
  }

  // // returns letter
  // for (const key of occurences.keys()) {
  //   if (occurences.get(key) == 1) return key;
  // }

  // returns [letter, index]
  // for (let i = 0; i < s.length; i++) {
  //   if (occurences.get(s[i]) == 1) return [s[i], i];
  // }

  // returns index
  for (const index in Array.from(s)) {
    if (occurences.get(s[index]) == 1) return Number(index);
  }

  return -1;
}

// console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aaaav"));

function firstUniqChar2(s: string): number {
  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    let unique = true;

    // Check if the current character is unique
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        unique = false; // Found a duplicate
        break; // No need to check further
      }
    }

    // If no duplicates were found, return the index
    if (unique) {
      return i;
    }
  }

  // If no unique character was found, return -1
  return -1;
}

function firstUniqChar3(s: string): number {
  // Create an array to store character frequencies for 26 letters (a-z)
  const chars = Array(26).fill(0);

  // Calculate the ASCII code for 'a' to use as the base for indexing
  const codeA = "a".charCodeAt(0);

  // Store the length of the string
  const n = s.length;

  // First pass: Count the frequency of each character
  for (let i = 0; i < n; i++) {
    // Get the ASCII code for the current character
    const charCode = s.charCodeAt(i);

    // Calculate the index for the character based on its ASCII code
    // Index = ASCII code of character - ASCII code of 'a'
    // Example: For 's' (ASCII code 115), index = 115 - 97 = 18
    chars[charCode - codeA]++;
  }

  // chars array after first pass with example s = "sams":
  // 'a': 1 (index 0)
  // 'm': 1 (index 12)
  // 's': 2 (index 18)
  // chars = [1, 0, 0, ..., 0, 1, 0, ..., 2, 0] (26 positions)

  // Second pass: Find the first unique character
  for (let i = 0; i < n; i++) {
    // Get the ASCII code for the current character
    const charCode = s.charCodeAt(i);

    // Check if the current character appears only once
    // Example: For 's' (ASCII code 115), check if chars[115 - 97] === 1
    if (chars[charCode - codeA] === 1) {
      // Return the index of the first unique character
      return i;
    }
  }

  // If no unique character is found, return -1
  return -1;
}
