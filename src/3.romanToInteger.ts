function romanToInt(s: string): number {
  const romanIntegerMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // "MCMXCIV""
  let result = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    const curValue = romanIntegerMap[s[i]];
    console.log(curValue);

    if (curValue > prevValue) {
      result += curValue - 2 * prevValue;
    } else {
      result += curValue;
    }

    prevValue = curValue;
  }

  return result;
}

// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
