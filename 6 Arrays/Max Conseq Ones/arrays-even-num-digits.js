/*
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
*/
var findMaxConsecutiveOnes = function (nums) {
  let arrOnes = nums
    .map((e) => e.toString())
    .join("")
    .split("0");
  return arrOnes.reduce((a, c) => (a.length < c.length ? c : a)).length;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
