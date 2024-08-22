// Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x: number): boolean {
  const numString = String(x)
  let reverse = "";

  for (let i = numString.length - 1; i >= 0; i--) {
    reverse += numString[i];
  }

  return reverse === numString;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); //false
