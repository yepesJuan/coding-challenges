// A positive integer is considered uniform if all of its digits are equal.
// For example, 222 is uniform, while 223 is not.

// Given two positive integers A and B, determine the number of uniform integers
// between A and B, inclusive.

// Please take care to write a solution which runs within the time limit.

// Constraints:
// 1 ≤ A ≤ B ≤ 10^12

// Sample test case #1
// A = 75
// B = 300
// Expected Return Value = 5
// Sample Explanation:
// In this case, the uniform integers between 75 and 300 are 77, 88, 99, 111, and 222.

// Sample test case #2
// A = 1
// B = 9
// Expected Return Value = 9
// Sample Explanation:
// In this case, all 9 single-digit integers between 1 and 9 (inclusive) are uniform.

// Sample test case #3
// A = 999999999999
// B = 999999999999
// Expected Return Value = 1
// Sample Explanation:
// In this case, the single integer under consideration (999999999999) is uniform.

function uniformIntegers(A: number, B: number) {
  let count = 0;
  for (let digit = 1; digit <= 9; digit++) {
    let uniformNumber = 0;
    // Generate numbers with 1 to 12 digits
    for (let length = 1; length <= 12; length++) {
      uniformNumber = uniformNumber * 10 + digit;

      // Check if uniformNumber exceeds B, then stop generating
      if (uniformNumber > B) break;

      // Count uniformNumber if it is within the range [A, B]
      if (uniformNumber >= A) {
        console.log(uniformNumber);
        count++;
      }
    }
  }
  return count;
}

console.log(uniformIntegers(75, 300));
