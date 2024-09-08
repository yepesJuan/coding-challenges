// A cafeteria table consists of a row of N seats, numbered from 1 to N from left to right.
// Social distancing guidelines require that every diner be seated such that K seats to
// their left and K seats to their right (or all the remaining seats to that side if
// there are fewer than K) remain empty.

// There are currently M diners seated at the table, the ith of whom is in seat S[i].
// No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.

// Determine the maximum number of additional diners who can potentially sit at the table
// without social distancing guidelines being violated for any new or existing diners,
// assuming that the existing diners cannot move and that the additional diners will
// cooperate to maximize how many of them can sit down.

// Please take care to write a solution which runs within the time limit.

// Constraints:
// 1 ≤ N ≤ 10^15 # of tables
// 1 ≤ K ≤ N # of space between tables
// 1 ≤ M ≤ 500,000 # of dinners
// M ≤ N
// 1 ≤ S[i] ≤ N

// Sample test case #1
// N = 10
// K = 1
// M = 2
// S = [2, 6]
// Expected Return Value = 3

// Sample test case #2
// N = 15
// K = 2
// M = 3
// S = [11, 6, 14]
// Expected Return Value = 1

// Sample Explanation:
// In the first case, the cafeteria table has N = 10 seats, with two diners currently at seats 2 and 6 respectively.
// The table initially looks as follows, with brackets covering the K = 1 seat to the left and right
// of each existing diner that may not be taken.
//   1 2 3 4 5 6 7 8 9 10
//   [   ]   [   ]
// Three additional diners may sit at seats 4, 8, and 10 without violating the social distancing guidelines.

// In the second case, only 1 additional diner is able to join the table, by sitting in any of the first 3 seats.

//

function maxAdditionalDiners(
  N: number,
  K: number,
  M: number,
  S: number[]
): number {
  // Sort the seated diners to process gaps correctly
  S.sort((a, b) => a - b);

  let additionalDiners = 0;

  // 1. Check the space before the first diner
  const spaceBeforeFirstDiner = S[0] - 1; // Number of seats before the first diner
  additionalDiners += Math.floor(spaceBeforeFirstDiner / (K + 1));

  // 2. Check the gaps between the seated diners
  for (let i = 0; i < M - 1; i++) {
    const leftDiner = S[i];
    const rightDiner = S[i + 1];

    // Gap between two diners
    const availableSpace = rightDiner - leftDiner - 1;

    // Only calculate additional diners if the gap is large enough
    if (availableSpace > K) {
      additionalDiners += Math.floor((availableSpace - K) / (K + 1));
    }
  }

  // 3. Check the space after the last diner
  const spaceAfterLastDiner = N - S[M - 1]; // Number of seats after the last diner
  additionalDiners += Math.floor(spaceAfterLastDiner / (K + 1));

  return additionalDiners;
}

// Sample Test Cases

// Test Case 1
let N1 = 10;
let K1 = 1;
let M1 = 2;
let S1 = [2, 6];
// console.log(maxAdditionalDiners(N1, K1, M1, S1)); // Expected output: 3

// Test Case 2
let N2 = 15;
let K2 = 2;
let M2 = 3;
let S2 = [11, 6, 14];
console.log(maxAdditionalDiners(N2, K2, M2, S2)); // Expected output: 1
