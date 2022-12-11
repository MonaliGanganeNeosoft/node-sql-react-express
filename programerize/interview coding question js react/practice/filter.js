const tasks = [
  { tasks: "ok", duration: 40 },
  { tasks: "nice", duration: 45 },
];
const result = tasks.filter((task) => task.duration >= 42);
console.log(result);
