// JavaScript program to compute the absolute difference between a specified number and 19.  Returns triple their absolute difference if the specified number is greater than 19
function diff(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}
console.log(diff(19));
console.log(diff(18));
console.log(diff(22));
