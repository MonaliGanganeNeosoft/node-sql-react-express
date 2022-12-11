function leapyear(year) {
  return year % 400 === 0 ? year % 4 === 0 : year % 4 === 0;
}
console.log(leapyear(1999));
