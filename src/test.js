class ListNode {
    constructor(x) {
       this.value = x;
        this.next = null;
      }
    }

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
  
      return new ListNode(cur);
    }, null);
}

const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);

function removeKFromList(l, k) {
    const getList = (node) => {
      const item = {};
      if(!node.next && node.value !== k) {
        item.value = node.value;
        item.next = null;
      } else if(node.value !== k) {
        item.value = node.value;
        item.next = getList(node.next);
      } else if (node.value === k) {
        item.next = getList(node.next);
      }
      return item;
    }

     newList = getList(l);
     return newList
}

removeKFromList(initial, 3);

