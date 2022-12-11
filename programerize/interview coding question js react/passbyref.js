let obj = {
  fname: "moni",
  lname: "gangane",
};
obj2 = obj;
obj.fname = "xyz";
console.log(obj2);
console.log(obj);
