/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, 
shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.
*/

const duplicateZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      arr.pop();
      i++;
    }
  }
};
arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(duplicateZeros(arr)); //expected [1,0,0,2,3,0,0,4]
