function* generate() {
  console.log("Invoke first");
  yield 1;
  console.log("Invoke second");
  yield 2;
  return 3;
}

let gen = generate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
