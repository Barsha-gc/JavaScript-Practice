// Check if a word or number is a palindrome. (e.g. 121, "madam")
function isPalindrome(input) {
  const str = input.toString().toLowerCase();
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log(`${input} is a Palindrome`);
  } else {
    console.log(`${input} is not a Palindrome`);
  }
}

isPalindrome("121");
isPalindrome("madam");
isPalindrome("hello");
