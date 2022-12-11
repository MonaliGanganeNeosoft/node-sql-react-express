//when a func ,instead of taking all argu at one Time,takes the first one and return a new function that takes the second one and returns a new function

//-->1

// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(2, 2, 2));

//-->2

// function sum(x) {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// }
// let data = sum(2)(2)(2);
// console.log(data);

//-->3

let userObj = {
  name: "Moni",
  uid: 1,
};
function info(obj) {
  return (name) => {
    return obj[name];
  };
}

let data = info(userObj);
console.log(data("uid"));
