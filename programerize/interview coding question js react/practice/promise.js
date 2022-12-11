const mypromise = new Promise((resolve, resject) => {
  let age = 17;
  if (age > 18) {
    setTimeout(() => {
      resolve("elligilbe");
    }, 2000);
  } else {
    resject("not");
  }
});
mypromise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
