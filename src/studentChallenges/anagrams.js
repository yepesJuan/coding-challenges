const wordA = "Secure";
const wordB = "resCue";

function isAnagram(word1, word2) {
  if ((word1.length || word2.length) == 0 || word1 == null || word2 == null)
    return false;

  const sortedWord1 = word1.toLowerCase().split("").sort().join("");
  const sortedWord2 = word2.toLowerCase().split("").sort().join("");

  return sortedWord1 === sortedWord2 ? true : false;
}
console.log(isAnagram(wordA, wordB));
