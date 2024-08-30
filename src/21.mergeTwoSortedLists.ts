
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // Step 2: Create a dummy node and a current pointer
  const dummy = new ListNode(-1);
  let current = dummy;

  // Step 3: Traverse and compare
  while (list1 !== null && list2 !== null) {
    let o = list1.val
    let t = list2.val
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      let c = current.val
      current = current.next;
  }

  // Step 4: Attach the remaining part
  if (list1 !== null) {
      current.next = list1;
  } else {
    console.log(list2)
      current.next = list2;
  }
  // Step 5: Return the merged list
  return dummy.next;
}

let list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));


// Merge the lists and print the result
const mergedList = mergeTwoLists(list1, list2);
printList(mergedList);

// Helper function to print the linked list without arrows
function printList(head: ListNode | null): void {
  let current = head;
  const values: number[] = [];
  while (current !== null) {
      values.push(current.val);
      current = current.next;
  }
  console.log(values); // Print the values separated by a space
}
