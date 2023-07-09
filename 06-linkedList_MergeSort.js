// Takes O(n log n) time
// Takes O(n) space

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeSortLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  const mid = findMiddle(head);
  const leftHalf = head;
  const rightHalf = mid.next;
  mid.next = null;

  const sortedLeft = mergeSortLinkedList(leftHalf);
  const sortedRight = mergeSortLinkedList(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
function merge(left, right) {
  const dummyNode = new ListNode(0);
  let current = dummyNode;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  if (left) {
    current.next = left;
  }
  if (right) {
    current.next = right;
  }

  return dummyNode.next;
}


// Testing
const head = new ListNode(5);
head.next = new ListNode(2);
head.next.next = new ListNode(9);
head.next.next.next = new ListNode(1);
head.next.next.next.next = new ListNode(3);

const sortedList = mergeSortLinkedList(head);
console.log(sortedList); // Output: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 5, next: ListNode { val: 9, next: null } } } } }
