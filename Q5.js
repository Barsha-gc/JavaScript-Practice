function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(`Minimum: ${min}`);
  console.log(`Maximum: ${max}`);
}
findMinMax([100, 44, 888, 234, 322, 0]);
