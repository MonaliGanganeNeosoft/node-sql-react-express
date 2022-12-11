const ages = [23, 12, 34, 23];
const result = ages.filter(chekAdult);
console.log(result);
function chekAdult(age) {
  return age >= 18;
}
