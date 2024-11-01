/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 31/10/2024

nums = [2, 5, 5, 11];

var twoSum = function (nums, target) {
  let j = 0;
  let result = [];
  while (result.length < 1) {
    for (let i = 0; i < nums.length; i++) {
      if (j != i) {
        if (nums[j] + nums[i] == target) {
          result.push(j, i);
          console.log(result);
          return result;
        }
      }
    }
    j++;
  }
};

twoSum(nums, 10);
