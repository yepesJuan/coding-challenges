/* Sample Test Case #1:
 R = 2, C = 3
 G = 0 0 1
     1 0 1
Expected Return Value: 0.50000000

Sample Test Case #2:
R = 2, C = 2 G = 1 1
                 1 1
Expected Return Value: 1.00000000

Sample Explanation:
In the first case, 3 out of the 6 cells in the grid contain battleships. 
Therefore, the probability that your shot will hit one of them is 3  6 = 0.5.

In the second case, all 4 cells contain battleships, resulting in a probability of 1.0 of hitting a battleship. *


/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R: number, C: number, G: number[][]): number {
  let battleshipCount = 0;
  const totalCells = R * C;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (G[i][j] === 1) {
        battleshipCount++;
      }
    }
  }

  return Number((battleshipCount / totalCells).toFixed(6));
}

// Sample Test Cases
const R1 = 2,
  C1 = 3;
const G1 = [
  [0, 0, 1],
  [1, 0, 1],
];
console.log(getHitProbability(R1, C1, G1)); // Expected: 0.50000000

const R2 = 2,
  C2 = 2;
const G2 = [
  [1, 1],
  [1, 1],
];
console.log(getHitProbability(R2, C2, G2));
