function mysum(x, ...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(mysum(2, 5, 5)); //10
console.log(mysum(2, 3, 2)); //5
console.log(mysum(2, 3, 4)); //7
