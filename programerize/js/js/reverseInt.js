function reverseInt(n) {
  if (n < 0) {
    return -1 * parseInt(n.toString().split("").reverse().join(""));
  }
  return parseInt(n.toString().split("").reverse().join(""));
}
console.log({
  test1: reverseInt(23),
  test2: reverseInt(51),
  test3: reverseInt(-23),
  test4: reverseInt(-500),
});
