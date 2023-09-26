/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /**returns node at indx passed in */
  _get(idx) {
    let count = 0;
    let currentVal = this.head
    while (currentVal) {
      if (idx === count) return currentVal
      count++
      currentVal = currentVal.next
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head !== null) newNode.next = this.head
    else this.tail = newNode
    this.head = newNode
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {

    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {

    return this.removeAt(0)

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0)
      throw new Error("Invalid index.");

    return this._get(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0)
      throw new Error("Invalid index.");

    this._get(idx).val = val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0)
      throw new Error("Invalid index.");

    if (idx === 0) return this.unshift(val)
    if (idx === this.length) return this.push(val)

    let newNode = new Node(val);
    let prev = this._get(idx - 1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0 || this.length == 0)
      throw new Error("Invalid index.");

    let curr = this._get(idx)
    /* if one item in list*/
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    /* if first item*/
    else if (idx === 0) {
      this.head = curr.next
    }
    else {
      let prev = this._get(idx - 1)
      prev.next = curr.next
      /*if last item */
      if (!prev.next) {
        this.tail = prev
      }
    }
    this.length--
    return curr.val
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) return 0
    let sum = 0;
    let currentVal = this.head
    while (currentVal) {
      sum += currentVal.val
      currentVal = currentVal.next
    }
    return sum / this.length
  }
}
/** Node: node for a doubly linked list. */
class DoubleNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}


/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  /**returns node at indx passed in */
  _get(idx) {
    let count = 0;
    let currentVal = this.head
    while (currentVal) {
      if (idx === count) return currentVal
      count++
      currentVal = currentVal.next
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new DoubleNode(val);
    /* empty list */
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new DoubleNode(val);
    /** if not empty list */
    if (this.head !== null) {
      newNode.next = this.head
      this.head.previous = newNode
    } else /* empty list*/ this.tail = newNode
    this.head = newNode
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let lastNode = this.tail
    this.tail = lastNode.previous
    this.tail.next = null
    return lastNode.val
    // return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {

    return this.removeAt(0)

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0)
      throw new Error("Invalid index.");

    return this._get(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0)
      throw new Error("Invalid index.");

    this._get(idx).val = val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0)
      throw new Error("Invalid index.");

    if (idx === 0) return this.unshift(val)
    if (idx === this.length) return this.push(val)

    let newNode = new DoubleNode(val);
    let curr = this._get(idx)
    newNode.next = curr
    curr.previous.next = newNode
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0 || this.length == 0)
      throw new Error("Invalid index.");

    let curr = this._get(idx)
    /* if one item in list*/
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    /* if first item*/
    else if (idx === 0) {
      this.head = curr.next
    }
    else {
      //let prev = this._get(idx - 1)
      curr.previous.next = curr.next
      /*if last item */
      if (!curr.previous.next) {
        this.tail = curr.previous
      }
    }
    this.length--
    return curr.val
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) return 0
    let sum = 0;
    let currentVal = this.head
    while (currentVal) {
      sum += currentVal.val
      currentVal = currentVal.next
    }
    return sum / this.length
  }
}

module.exports = LinkedList;
