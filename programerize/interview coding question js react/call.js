function sayHello() {
  console.log("hello" + " " + this.name);
}
var obj = { name: "moni" };
sayHello.call(obj);
