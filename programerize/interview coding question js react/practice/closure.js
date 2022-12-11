function outer() {
  var count = 0;
  console.log(count);
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const data = outer();
console.log(data());

console.log(data());
console.log(data());
