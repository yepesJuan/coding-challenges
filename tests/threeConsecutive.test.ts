import { minimumMovesToAvoidThreeConsecutive as minTest } from '../src/threeConsecutive';

describe('minTest', () => {
  it('should return 0 for strings with length less than 3', () => {
    expect(minTest('a')).toBe(0);
    expect(minTest('ab')).toBe(0);
  });

  it('should return correct number of moves for strings with three consecutive characters', () => {
    expect(minTest('aaa')).toBe(1); // One segment of 'aaa'
    expect(minTest('aaaa')).toBe(1); // One segment of 'aaa'
    expect(minTest('aaaaa')).toBe(1); // One segment of 'aaaa'
    expect(minTest('aaabbb')).toBe(2); // Two segments of 'aaa' and 'bbb'
  });

  it('should handle mixed strings with no consecutive characters', () => {
    expect(minTest('abc')).toBe(0); // No consecutive characters
    expect(minTest('ababab')).toBe(0); // No consecutive characters
  });

  it('should handle strings with longer segments of consecutive characters', () => {
    expect(minTest('aaabbbccc')).toBe(3); // Three segments of 'aaa', 'bbb', 'ccc'
    expect(minTest('aabbaabb')).toBe(2); // Two segments of 'aa' and 'bb'
  });
});