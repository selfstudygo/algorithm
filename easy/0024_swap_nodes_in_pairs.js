var swapPairs = function(head) {
  if(!head || !head.next) return head;
  let newHead = null;
  const swap = (f, p) => {
    if(!f || !f.next) return;
    const s = f.next;
    const n = s.next;
    if (p) {
      p.next = s;
    } else {
      newHead = s;
    }
    s.next = f;
    f.next = n;
    return swap(n, f);
  }
  swap(head, null);
  return newHead;
};
