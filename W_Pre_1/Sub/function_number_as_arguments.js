function sumDigProd(...nums) {
  let sum = nums.reduce((acc, val) => acc + val);
  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, val) => acc * parseInt(val), 1);
  }
  return sum;
}

console.log(sumDigProd(16, 28));
console.log(sumDigProd(0));
console.log(sumDigProd(1, 2, 3, 4, 5, 6));
