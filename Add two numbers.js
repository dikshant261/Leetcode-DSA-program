/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1=[];
let num2=[];
 while(l1){
    num1.push(l1.val);
    l1=l1.next;
 }
 while(l2){
     num2.push(l2.val);
     l2=l2.next;
 }
 let val1=num1.reverse().join("")

 let val2=num2.reverse().join("");


 const finalVal=BigInt(val1)+BigInt(val2);
 let finalNum=finalVal.toString().split("");
 let finalNum1=finalNum.reverse();
 let list=null;

 for(let i=finalNum1.length-1;i>=0;i--){
     list={val:parseInt(finalNum1[i]),next:list};
 }
 return list;
};
