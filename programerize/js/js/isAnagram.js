const A = "kunle";
const B = "elnuk";
const C = "Bodys";
const isObj = (str) => {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
};
const isPermutation = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else if (str1.length !== str2.length) {
    return false;
  } else {
    const obj1 = isObj(str1);
    const obj2 = isObj(str2);
    for (let i in obj1) {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isPermutation(A, C));
