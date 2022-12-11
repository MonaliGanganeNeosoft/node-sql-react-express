let salary = {
  Moni: 1000,
  goli: 2000,
  piyu: 3000,
};
function top(salary) {
  var max = 0;
  var topper = "null";
  for (let name in salary) {
    if (salary[name] > max) {
      max = salary[name];
      topper = name;
    }
  }
  console.log(`${topper}`);
}
top(salary);
