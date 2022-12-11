function abc() {
  console.log("start");
  setTimeout(() => console.log("event call"), 2000);
  console.log("end");
}
abc();
