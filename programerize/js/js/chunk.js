const chunks = ((arr, n) => {
  let chunked = [];
  for (let elem of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) chunked.push([elem]);
    else last.push(elem);
  }
  return chunked;
})([1, 1, 2, 3, 4, 5, 3], 4);
console.log(chunks);
