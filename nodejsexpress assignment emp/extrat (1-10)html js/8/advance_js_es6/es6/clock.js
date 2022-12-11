class Clock {
  render() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    if (hour == 12) {
      console.log(`${hour} : ${min} : ${sec} PM`);
    }
    if (hour > 12) {
      hour = hour - 12;
      console.log(`${hour} : ${min} : ${sec} PM`);
    } else {
      console.log(`${hour} : ${min} : ${sec} AM`);
    }
  }
  start() {
    var interval = setInterval(this.render, 1000);
  }
}
var obj = new Clock();
obj.start();
