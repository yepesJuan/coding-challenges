function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const n = 30;
fizzBuzz(n);

// 1 to 16
// but those are divisible 3 console fizz
// but those are divisible 5 console buzz
// but those are divisible 5 and 3 console fizzBuzz
