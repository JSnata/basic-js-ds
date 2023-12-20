const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    const getList = (node) => {
      const item = {};
      item.value = node.value;
      if(node.next) {
        item.next = getList(node.next);
      } else {
        item.next = null;
      }
      return item;
    }
    const underlyingList = getList(this.first);
    return underlyingList;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    const count = this.first;
    this.first = this.first.next;
    this.length--;
    return count.value;
  }
}

module.exports = {
  Queue
};
