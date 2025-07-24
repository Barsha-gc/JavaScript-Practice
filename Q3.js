// Reverse a number. (e.g: 123->321)

function reverseNumber(num) {
  const reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed);
}
console.log(reverseNumber(764));
