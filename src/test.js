const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {

    getUnderlyingList() {
      const underlyingList = {};
      underlyingList.value = this.last;
      underlyingList.next = this.last.next;
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


  