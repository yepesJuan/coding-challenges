/*
Given a mapping from digits to list of letters and a string of digits of arbitrary length determine all possible ways to replace the digits with letters.
Mapping = {
'1': ['A', 'B', 'C'],
'2': ['D', 'E', 'F'],
...
}
Input String = "12"

Expected Output = ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
*/
function letterCombinations(
  mapping: Record<string, string[]>,
  input: string
): string[] {
  const results: string[] = [];

  // Edge case: if the input is empty, return an empty array
  if (input.length === 0) return results;

  // Helper function for backtracking
  const backtrack = (currentIndex: number, currentCombination: string) => {
    // Base case: If we've processed all digits in the input
    if (currentIndex === input.length) {
      results.push(currentCombination);
      return;
    }

    // Get the current digit from the input
    const currentDigit = input[currentIndex];
    // Retrieve the possible letters from the mapping for the current digit
    const letters = mapping[currentDigit];

    // Iterate over each letter corresponding to the current digit
    for (const letter of letters) {
      // Append the letter to the current combination and proceed to the next digit
      backtrack(currentIndex + 1, currentCombination + letter);
    }
  };

  // Start backtracking from the first digit
  backtrack(0, "");

  return results;
}

// Example usage
const mapping: Record<string, string[]> = {
  "1": ["A", "B", "C"],
  "2": ["D", "E", "F"],
  // Add more mappings if needed
};

const inputString = "12";
const combinations = letterCombinations(mapping, inputString);
console.log(combinations);
// Output: ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
