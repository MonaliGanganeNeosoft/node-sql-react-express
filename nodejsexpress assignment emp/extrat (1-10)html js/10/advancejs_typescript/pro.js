const myPromise = new Promise((resolve, reject) => {
  let age = 19;
  if (age > 18) {
    setTimeout(() => {
      resolve("Elligible");
    }, 2000);
  } else {
    reject("Not Elligible");
  }
});
