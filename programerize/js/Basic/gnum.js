const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt("enter a guest no:");
if (num == gnum) {
  console.log("Match");
} else {
  console.log("Not match" + gnum);
}
