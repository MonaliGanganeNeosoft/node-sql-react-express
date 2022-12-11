const no = parseInt(prompt("enter no"));
let isprime = true;
if (no === 1) {
  console.log("not prime not compositw");
} else if (no > 1) {
  for (let i = 2; i < no; i++) {
    if (no % i == 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log("isprime");
  } else {
    console.log("not prime");
  }
} else {
  console.log("not prime");
}
