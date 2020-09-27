const solution = (l1, l2) => {
  let f = l1;
  let s = l2;
  let head = null;
  let curr = null;
  while(f || s) {
    let node;
    if(!s || f && f.val <= s.val) {
      node = f;
      f = f.next;
    } else {
      node = s;
      s = s.next;
    }

    node.next = null;
    if(!head) {
      head = node;
      curr = node;
    } else {
      curr.next = node;
      curr = node;
    }
  }
  return head;
};
