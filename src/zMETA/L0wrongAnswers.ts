// // ABA => BAB
// // AAAAA => BBBB

/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N: number, C: string): string {
  // const result = [];
  // for (let i = 0; i < N; i++) {
  //   if (C[i] == "A") result.push("B");
  //   else result.push("A");
  // }
  // return result.join();

  return C.split("")
    .map((char) => (char === "A" ? "B" : "A"))
    .join("");
}

console.log(getWrongAnswers(4, "BBBB"));
