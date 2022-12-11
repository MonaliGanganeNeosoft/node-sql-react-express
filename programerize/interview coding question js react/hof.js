function hof() {
  return function () {
    console.log("do something");
  };
}
var x = hof();
x();
