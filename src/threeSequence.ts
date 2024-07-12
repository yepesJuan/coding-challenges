const minimumMovesToAvoidThreeConsecutive = (S: string): number => {
  
  if (S.length < 3) {
      return 0;
  }
  
  let moves = 0;
  let count = 1;
  
  for (let i = 1; i < S.length; i++) {
      if (S[i] === S[i - 1]) {
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
}

// Example usage:
const input1: string = "baaaaa";
const input2: string = "baaabbaabbba";
const input3: string = "baabab";

console.log(minimumMovesToAvoidThreeConsecutive(input1)); // Output: 1
console.log(minimumMovesToAvoidThreeConsecutive(input2)); // Output: 2
console.log(minimumMovesToAvoidThreeConsecutive(input3)); // Output: 0
