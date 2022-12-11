/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
const today = new Date();
const day = today.getDay();
const daylist = [
  "sunday",
  "monday",
  "tuesday",
  "thursday",
  "friday",
  "saturday",
];
console.log("Today is:" + daylist[day] + ".");

var min = today.getMinutes();
var sec = today.getSeconds();
var hr = today.getHours();
var prepand = hr >= 12 ? "PM" : "AM";
hr = hr >= 12 ? hr - 12 : hr;

if (hr === 0 && prepand === "PM") {
  if (min === 0 && sec === 0) {
    hr = 12;
    prepand = "Noon";
  } else {
    hr = 12;
    prepand = "PM";
  }
}
if (hr === 0 && prepand === "AM") {
  if (min === 0 && sec === 0) {
    hr = 12;
    prepand = "Midnight";
  } else {
    hr = 12;
    prepand = "AM";
  }
}
console.log("Current time is :" + hr + prepand + ":" + min + ":" + sec);
