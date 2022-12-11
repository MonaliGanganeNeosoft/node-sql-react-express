function sayHello(msg) {
  console.log(this.name + " " + msg);
}
var obj = { name: "Moni" };
sayHello.apply(obj, ["Awsome"]);
