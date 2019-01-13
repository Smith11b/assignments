class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node) {
      if (!node.next.next) {
        node.next = null;
      }
      node = node.next;
    }
  }

  insertLast(data) {
    const node = getLast();
    if (node){
      node.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index){
    let node = this.head;
    let counter = 0;
    while (node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index){
    if (!this.head) return null;
    if (index === 0) {
      this.head = this.head.next; return;}
    let previous = this.getAt(index -1);
    if(!previous.next){
      return;}
      previous.next = previous.next.next;

    }

    insertAt

  }
    

}

