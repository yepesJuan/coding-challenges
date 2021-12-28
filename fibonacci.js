// 0 1 1 2 3 5 8 13 21 34

// recursive
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci2(8));

// iterate
function fibonacci2(n) {
  //const arr = [0, 1];
  if ( n <  2 ) {
    return n
  }

  for (let i = 2; i <= n; i++) {
    

  }
}
