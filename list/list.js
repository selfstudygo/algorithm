/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(head) {
  this.head = head;
};

var Node = function(val, next = null){
  this.val = val;
  this.next = next;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let i = 0;
  let node = this.head;
  while (node) {
    if (i === index) {
      return node.val;
    }
    node = node.next;
    i++;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.head = new Node(val, this.head);
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new Node(val);
  let n = this.head;
  while(n) {
    if(!n.next) {
      n.next = node;
      return;
    }
    n = n.next;
  }
  this.head = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  const node = new Node(val);
  let i = 0;
  let n = this.head;
  while (n) {
    const next = n.next;
    if ((i+1) ===index) {
      n.next = node;
      node.next = next;
      return;
    }
    i++;
    n = next;
  }
  if(index === 0) this.head = node;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let i = 0;
  let node = this.head;
  if(!this.head) return;
  if(index === 0) {
    this.head = this.head.next;
    return;
  }
  while(node) {
    const next = node.next;
    if(!next) { break; }
    if((i+1) ===index) {
      node.next = next.next;
      break;
    }
    i++;
    node = next;
  }
};
