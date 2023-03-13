/*
Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return isSym(root.left, root.right);
};

function isSym(left, right) {
  if (left === null || right === null) return left === right;
  if (left.val !== right.val) return false;
  return isSym(left.left, right.right) && isSym(right.left, left.right);
}
