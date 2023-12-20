


/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// constructor (value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

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
    console.log(this.rootItem);
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

  find(/* data */) {

  }

  remove(/* data */) {

    // remove line with error and write your code here
  }

  min() {

    // remove line with error and write your code here
  }

  max() {

    // remove line with error and write your code here
  }
}

const tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);

console.log(tree.has(8));

