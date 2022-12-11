function* generate() {
  console.log("Invoke first");
  yield 1;
  console.log("Invoke second");
  yield 2;
  yield 3;
}
for (const val of generate()) {
  console.log(val);
}
//  let gen=generate();
//  console.log(gen.next());
//  console.log(gen.next());
//  console.log(gen.next());
