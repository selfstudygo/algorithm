var oddEvenList = function(head) {
  let o = head;
  if(!head) {
    return head;
  }
  let e = head.next;
  const eStart = e;
  while(o.next && e.next) {
    const on = e.next;
    const en = on.next;
    o.next = on;
    e.next = en;
    o=on;
    e=en;
  }
  o.next = eStart;
  return head;
};
