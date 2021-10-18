const wordA = "LoKo";
const wordB = "kolo";

function isAnagram(word1, word2) {
  if (
    word1.length == 0 ||
    word2.length == 0 ||
    word1 == null ||
    word2 == null
  ) {
    return false;
  }
  if (word1.length == 1 && word2.length == 1) {
    return true;
  }

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  let sortedWord1 = word1.split("").sort().join("");
  let sortedWord2 = word2.split("").sort().join("");

  //   console.log(sortedWord1);
  //   console.log(sortedWord2);

  if (sortedWord1 === sortedWord2) return true;
    else return false;
}

console.log(isAnagram(wordA, wordB));
