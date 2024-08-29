// AMEX
// Given a string 𝑆 consisting of 𝑁 letters 'a' and 'b', you can replace any letter with its counterpart ('a' with 'b' or 'b' with 'a') in one move.
// The goal is to determine the minimum number of moves required to transform S into a string that contains no instances of three consecutive identical letters.

// Example 1:
// Input: "baaaaa"
// Output: 1
// Explanation: To eliminate the sequence "aaaa" (three consecutive 'a's), you can change the third 'a' to 'b', resulting in "baabaa".
// Example 2:
// Input: "baaabbaabbba"
// Output: 2
// Explanation: There are several valid transformations, but one approach is to change the sequence "aaa" to "aab" and "bbb" to "bba", resulting in "bbaabbaabbaa".
// Example 3:
// Input: "baabab"
// Output: 0
// Explanation: The string already contains no sequences of three consecutive identical letters.

export const minimumMovesToAvoidThreeConsecutive = (S: string): number => {
  if (S.length < 3) {
    return 0;
  }

  let moves = 0;
  let count = 1;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      count++;
    } else {
      if (count >= 3) {
        moves += Math.floor(count / 3);
      }
      count = 1;
    }
  }
  // Check the last segment
  if (count >= 3) {
    moves += Math.floor(count / 3);
  }

  return moves;
};

// Example usage:
const input = "aaabbbaaaaaa";

console.log(minimumMovesToAvoidThreeConsecutive(input)); // Output: 5

function solution(S: string): number {
  let moves = 0;
  let i = 0;

  while (i < S.length) {
      // Check if we have three consecutive identical letters
      if (i + 2 < S.length && S[i] === S[i + 1] && S[i] === S[i + 2]) {
          moves++;
          // Skip past the current sequence of three identical letters
          i += 3;
      } else {
          i++;
      }
  }

  return moves;
}

// Example usage
const S = "aaabbbaaaaa";
console.log(solution(S)); 
