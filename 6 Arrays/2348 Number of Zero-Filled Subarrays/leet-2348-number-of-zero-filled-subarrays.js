/*
Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

Example 2:

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
*/

const zeroFilledSubarray = (nums) => {
  // Initialize variables for counting zero-filled subarrays
  let count = 0; // Total count of zero-filled subarrays
  let subcount = 0; // Length of the current subarray of contiguous 0s

  // Iterate over each element in the input array
  for (const num of nums) {
    // If the current element is not zero,
    // the current subarray of contiguous 0s has ended
    if (num !== 0) {
      // So, reset the length of the current subarray of contiguous 0s
      // and move on to the next element in the input array
      subcount = 0;
      continue;
    }

    // If the current element is zero,
    // increment the length of the current subarray of contiguous 0s
    subcount++;

    // And add the length of the current subarray of contiguous 0s
    // to the total count of zero-filled subarrays
    count += subcount;
  }

  // Return the total count of zero-filled subarrays in the input array
  return count;
};

/*
var zeroFilledSubarray = ((nums, counter = 0) =>
    nums.reduce((p, num) =>
        p + (counter = num === 0 ? counter + 1 : 0), 0)
)
*/
