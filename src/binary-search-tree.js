const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// constructor (value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    return this.rootItem;
  }

  add(data) {
    this.rootItem = addItems(this.rootItem, data);

    function addItems(item, value) {
      if (item) {
        if (item.data === value) {
          return item;
        }

        value < item.data
          ? (item.left = addItems(item.left, value))
          : (item.right = addItems(item.right, value));

        return item;
      }
      return new Node(value);
    }
  }

  has(data) {
    return searchItem(this.rootItem, data);

    function searchItem(item, value) {
      if (item) {
        if (item.data === value) {
          return true;
        }
        console.log(item.data);
        console.log(value)

        return value < item.data
          ? (searchItem(item.left, value))
          : (searchItem(item.right, value));
      }
      return false;
    }
  }

  find(data) {
    return searchItem(this.rootItem, data);

    function searchItem(item, value) {
      if (item) {
        if (item.data === value) {
          return item;
        }

        return value < item.data
          ? (searchItem(item.left, value))
          : (searchItem(item.right, value));
      }
      return null;
  }
}

  remove(/*data*/) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if(this.rootItem){
      let item = this.rootItem;

      while (item.left) {
        item = item.left;
      }
  
      return item.data;
    }
  }

  max() {
    if(this.rootItem){
      let item = this.rootItem;

      while (item.right) {
        item = item.right;
      }
  
      return item.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
