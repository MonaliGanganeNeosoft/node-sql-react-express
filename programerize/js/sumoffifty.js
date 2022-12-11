//JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
function sum(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(sum(20, 30));
console.log(sum(10, 40));

console.log(sum(50, 30));
console.log(sum(20, 10));
