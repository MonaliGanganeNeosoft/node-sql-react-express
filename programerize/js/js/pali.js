function isPalindrome(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  if (str === reversed) {
    console.log("ispalindrome yes");
  } else {
    console.log("not");
  }
}
isPalindrome("abba");
