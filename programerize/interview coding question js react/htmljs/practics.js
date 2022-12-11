// function sum(x, y, z) {
//   return x + y + z;
// }
// console.log(sum(2, 2, 2));

// function sum(x) {
//   return (y) => {
//     return (z) => {
//       return x + y + z;
//     };
//   };
// }
// let data = sum(2)(2)(2);
// console.log(data);

let userObj = {
  name: "moni",
  uid: 101,
};
function userInfo(obj) {
  return (name) => {
    return obj[name];
  };
}
let data = userInfo(userObj);
console.log(data("uid"));
