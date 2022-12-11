function posneg(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(posneg(1, 3));
console.log(posneg(-1, -3));
console.log(posneg(-1, 3));
console.log(posneg(1, -3));
