function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  console.log(`Minimum number is: ${min}`);
  console.log(`Maximum number is: ${max}`);
}

let numbers = [100, 88, 55, 90, 2, 1];
findMinMax(numbers);
