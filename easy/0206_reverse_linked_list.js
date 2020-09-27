const reverseList = function(head) {
  let curr = head;
  let prev = null;
  while (curr && curr.next) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  if (prev) {
    curr.next = prev;
  }
  return curr;
};

const solution = function(head) {
  const getNext = (curr, prev) => {
    if(!curr) {
      return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return  getNext(next, curr);
  }
  return getNext(head, null);
};
