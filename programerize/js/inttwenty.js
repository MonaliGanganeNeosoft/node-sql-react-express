//JavaScript program to check whether a given integer is within 20 of 100 or 400
function inttwinty(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}
console.log(inttwinty(90));
console.log(inttwinty(199));
