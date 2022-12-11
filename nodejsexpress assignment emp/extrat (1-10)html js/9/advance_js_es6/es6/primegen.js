function* primenumber() {
  let value = 2;
  while (true) {
    value++;
    while (true) {
      let status = 1;
      for (let i = 2; i < value; i++) {
        if (value % i == 0) {
          status = 0;
        }
      }
      if (status == 0) {
        value++;
      } else {
        break;
      }
    }
    yield value;
  }
}
var primenumber1 = primenumber();
console.log(primenumber1.next());
console.log(primenumber1.next());
console.log(primenumber1.next());
console.log(primenumber1.next());
console.log(primenumber1.next());
console.log(primenumber1.next());
console.log(primenumber1.next());
