/**
 * @param {ListNode} head
 * @return {boolean}
 */

const solution2 = function(head) {
  let slow = head;
  let fast = head;
  const arr = [];
  while (fast && fast.next) {
    arr.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
    if (!fast) { // shorten the time
      break;
    }
  }
  if(fast) {slow = slow.next}
  while(arr.length) {
    if(arr.pop() !== slow.val) {
      return false;
    };
    slow = slow.next;
  }
  return true;
};
