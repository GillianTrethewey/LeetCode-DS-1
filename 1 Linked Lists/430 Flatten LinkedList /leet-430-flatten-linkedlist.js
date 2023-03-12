/*
You are given a doubly linked list, which contains nodes that have a next pointer, 
a previous pointer, and an additional child pointer. 
This child pointer may or may not point to a separate doubly linked list, 
also containing these special nodes. 
These child lists may have one or more children of their own, and so on, 
to produce a multilevel data structure as shown in the example below.
Given the head of the first level of the list, 
flatten the list so that all the nodes appear in a single-level, doubly linked list. 
Let curr be a node with a child list. 
The nodes in the child list should appear after curr and before curr.next in the flattened list.
Return the head of the flattened list. 
The nodes in the list must have all of their child pointers set to null.

Example 1:
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]

Example 2:
Input: head = [1,2,null,3]
Output: [1,3,2]

Example 3:
Input: head = []
Output: []
*/
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
const flatten = (head) => {
  let temp = head;
  let stack = [];

  while (head) {
    if (head.child) {
      if (head.next) {
        stack.push(head.next);
      }
      head.next = head.child;
      head.next.prev = head;
      head.child = null;
    } else if (!head.next && stack.length > 0) {
      //if head.next is null but there are still nodes in stack
      head.next = stack.pop(); //head.next will point to the popped value from stack
      head.next.prev = head;
    }
    head = head.next; //so the iteration continues to the next node and then next node
  }
  return temp;
};

/*

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Step1:
head is 3
stack = [---4---5---6--NULL]
             
 1---2---3
         |
         7---8---9---10--NULL
             |
             11--12--NULL
             

Step2:
stack = [---4---5---6--NULL]
             
 1---2---3--7---8---9---10--NULL
                |
                11--12--NULL
                          

Step3:
stack = [---4---5---6--NULL, ---9---10--NULL]
             
 1---2---3--7---8---11--12--NULL      
 
Step4:
stack.pop() and append it to the next of last node in linked list, it will look like this
stack = [---4---5---6--NULL]
             
 1---2---3--7---8---11--12---9---10--NULL  
 

Step5:
stack.pop() and append it to the next of last node in linked list, it will look like this
stack = []
             
 1---2---3--7---8---11--12---9---10----4---5---6--NULL
 
 
 Step6:
 return the result = 1---2---3--7---8---11--12---9---10----4---5---6--NULL
 
 */
