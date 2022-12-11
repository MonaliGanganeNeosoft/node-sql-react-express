function maxChar(str) {
  let obj = {};
  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }
  console.log(obj);
  let maxnum = 0;
  let maxCha = "";
  for (let char in obj) {
    if (obj[char] >= maxnum) {
      maxnum = obj[char];
      maxCha = char;
    }
  }
  console.log(`${maxCha} apperes ${maxnum}`);
}
maxChar("Monnni11");
