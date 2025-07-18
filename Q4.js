//  Build a simple calculator for +, -, \*, and / operations.
let num1 = 10;
let num2 = 20;
let operator = "+";

if (operator === "+") {
  console.log("Result:", num1 + num2);
} else if (operator === "-") {
  console.log("Result:", num1 - num2);
} else if (operator === "*") {
  console.log("Result:", num1 * num2);
} else if (operator === "/") {
  console.log("Result:", num1 / num2);
} else {
  console.log("Invalid operator");
}
