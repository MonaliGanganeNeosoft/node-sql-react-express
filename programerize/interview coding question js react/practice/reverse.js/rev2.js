(function (str) {
  let rev = "";
  for (let character of str) {
    rev = character + rev;
  }
  console.log("rev value:" + rev);
})("hello");
