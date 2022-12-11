const numbers = [5, 4, 3, 2, 1];
let data = numbers.reduce(myfunction);
console.log(data);
function myfunction(total, num) {
  return total - num;
}
