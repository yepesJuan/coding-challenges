// Import the function to be tested
import { findDifference } from "../src/easy/9999.findMissingNumber"; // Adjust the path as needed

// Test Suite for findDifference function
describe("findDifference", () => {
  test("should return correct distinct integers from nums1 and nums2", () => {
    // Test case 1
    expect(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 0, 5])).toEqual([
      [4],
      [0],
    ]);

    // Test case 2
    expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);

    // Test case 3: Completely distinct arrays
    expect(findDifference([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    // Test case 4: Identical arrays
    expect(findDifference([1, 2, 3], [1, 2, 3])).toEqual([[], []]);

    // Test case 5: One array is empty
    expect(findDifference([], [1, 2, 3])).toEqual([[], [1, 2, 3]]);
    expect(findDifference([1, 2, 3], [])).toEqual([[1, 2, 3], []]);

    // Test case 6: Edge case with negative numbers
    expect(findDifference([1, -2, -3], [-3, -2, 4])).toEqual([[1], [4]]);
  });
});
