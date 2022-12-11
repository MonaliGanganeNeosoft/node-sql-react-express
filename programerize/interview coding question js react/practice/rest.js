function mysum(...args) {
  var sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(mysum(2, 2, 2));
