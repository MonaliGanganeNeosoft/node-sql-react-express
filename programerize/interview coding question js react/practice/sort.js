const list = [{ color: "white" }, { color: "black" }];
const result = list.sort((a, b) => (a.color > b.color ? 1 : -1));
console.log(result);
