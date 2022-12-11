function diff(n) {
  if (n <= 13) {
    return 13 - n;
  } else {
    return (n - 13) * 2;
  }
}

console.log(diff(32));
console.log(diff(11));
