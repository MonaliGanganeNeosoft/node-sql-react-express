let arr = [1, 2, 3, 4, 5];
let newAr = arr.map((val) => val * 2);

console.log("Map eg");
console.log(newAr);

console.log("Filter example results");
let arr1 = arr.filter((val) => val % 2 == 0);
console.log(arr1);

console.log("Reduce example results");
let total = arr.reduce((prev, current) => {
  return prev + current;
}, 0);
console.log(total);
