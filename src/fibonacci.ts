// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181
// iterative
// prints the first Nth Fibonacci numbers
const fibonacci2 = (n: number): void => {
  if (n < 0) {
    console.log(
      "Invalid input. Please provide a positive integer greater than zero."
    );
    return;
  }
  let before = 0;
  let actual = 1;

  console.log(before); // Print the first Fibonacci number
  if (n > 1) {
    console.log(actual); // Print the second Fibonacci number
  }
  for (let i = 1; i < n; i++) {
    const next = before + actual;
    console.log(next);
    before = actual;
    actual = next;
  }
}
fibonacci2(5);

// recursive
// returns the Nth Fibonacci number
const fibonacci = (n: number) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
