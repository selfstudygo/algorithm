function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
const addTwoNumbers = (l1, l2) => {
  let overflow = 0;
  let f = l1;
  let s = l2;
  let head = null;
  let curr = null;
  while(f || s) {
    let sum = (f ? f.val : 0) + (s ? s.val: 0) + overflow;
    const node = new ListNode(sum%10);
    overflow = sum >=10 ? 1 : 0;
    if(f) f = f.next;
    if(s) s = s.next;
    if(!head) {
      head = node
    } else {
      curr.next = node;
    }
    curr = node;
  }
  if(overflow) {
    curr.next = new ListNode(1);
  }
  return head;
};
