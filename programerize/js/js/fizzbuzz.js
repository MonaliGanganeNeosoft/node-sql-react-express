function num() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      ++i;
    }
    if (i % 3 === 0) {
      console.log("fizz");
      ++i;
    }
    if (i % 5 === 0) {
      console.log("buzz");
    }
    if (i % 3 === 0) {
      console.log("fizz");
      ++i;
    }
    if (i > num) break;
    else console.log(i);
  }
}
num();
