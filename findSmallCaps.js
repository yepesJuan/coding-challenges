// A word is on the loose and now has tried to hide amongst a crowd of tall letters!
// Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord("aaHeEaLLaaaO") ➞ "HELLO"

// detectWord("BxxOxxCxxAx xCxxOxxxDxxE") ➞ "BOCA CODE"

// detectWord("WeeExEK:2") ➞ "WEEK:2"

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

console.log(detectWord("aaHelElLLeeoO"));
console.log(detectWord("smdfHdsmEdLddLOw")); // toUpperCase
