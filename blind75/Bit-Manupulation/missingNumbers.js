var missingNumber = function (nums, missingNumber = nums.length) {
  for (let i = 0; i < nums.length; i++) {
    const xor = i ^ nums[i];

    missingNumber ^= xor;
  }

  return missingNumber;
};

console.log([1, 2, 4]);

var missingNumber = function (nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  return res;
};
console.log(missingNumber([0, 1, 3]));
