// A word is on the loose and now has tried to hide amongst a crowd of small letters!
// Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord(word1) ➞ "BOCA CODE"
// detectWord(word2) ➞ "HELLO"

const word1 = "aaHeEaLLaaaO";
const word2 = "BxxOxxCxxAx xCxxOxxxDxxE";

function detectWord(arr) {
  let letter = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() === arr[i]) {
      letter += arr[i];
    }
  }
  return letter;
}

console.log(detectWord(word1));
console.log(detectWord(word2)); // toUpperCase
