/*Write a JavaScript program to 
find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */

var s1 = 5;
var s2 = 6;
var s3 = 7;
var s = (s1 + s2 + s3) / 2;
const result = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(result);
