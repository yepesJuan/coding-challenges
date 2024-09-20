import { rotationCipher } from "../../src/zInterviewHubMeta/rotationCypher"; // Adjust the import to point to where `rotationalCipher` is defined

// Test suite for rotationalCipher
describe("rotationalCipher", () => {
  test("should correctly rotate letters and numbers with small rotation factor", () => {
    const input = "All-convoYs-9-be:Alert1.";
    const rotationFactor = 4;
    const expected = "Epp-gsrzsCw-3-fi:Epivx5.";
    const output = rotationCipher(input, rotationFactor);
    expect(output).toBe(expected);
  });

  test("should correctly rotate letters and numbers with large rotation factor", () => {
    const input = "abcdZXYzxy-999.@";
    const rotationFactor = 200;
    const expected = "stuvRPQrpq-999.@";
    const output = rotationCipher(input, rotationFactor);
    expect(output).toBe(expected);
  });

  test("should handle input with no rotation", () => {
    const input = "Hello-World!";
    const rotationFactor = 0;
    const expected = "Hello-World!";
    const output = rotationCipher(input, rotationFactor);
    expect(output).toBe(expected);
  });

  test("should handle input with large rotation beyond alphabet size", () => {
    const input = "abcXYZ123";
    const rotationFactor = 260; // Same as no rotation (26*10)
    const expected = "abcXYZ123";
    const output = rotationCipher(input, rotationFactor);
    expect(output).toBe(expected);
  });
});
