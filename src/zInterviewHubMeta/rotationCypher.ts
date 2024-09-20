export function rotationCipher(input: string, rotationFactor: number): string {
  const rotateChar = (char: string, base: number, mod: number) =>
    String.fromCharCode(
      ((char.charCodeAt(0) - base + rotationFactor) % mod) + base
    );

  let result = "";

  for (const char of input) {
    if (char >= "a" && char <= "z") {
      result += rotateChar(char, "a".charCodeAt(0), 26);
    } else if (char >= "A" && char <= "Z") {
      result += rotateChar(char, "A".charCodeAt(0), 26);
    } else if (char >= "0" && char <= "9") {
      result += rotateChar(char, "0".charCodeAt(0), 10);
    } else {
      result += char;
    }
  }

  return result;
}
