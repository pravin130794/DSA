/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //create one array with value is 1
  let res = new Array(nums.length).fill(1);

  //define prefix and postfix
  let prefix = 1;
  let postfix = 1;

  // this loop will calculate prefix value and store in res array
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  // this loop will calculate postfix value and store in res array
  for (let i = nums.length - 1; 0 <= i; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
