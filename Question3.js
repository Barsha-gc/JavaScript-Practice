// Reverse a number. (e.g: 123->321)

function reverseNumber(num) {
  let reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed);
}
let number = 444;
console.log(`Reversed number of ${number} is ${reverseNumber(number)}`);
