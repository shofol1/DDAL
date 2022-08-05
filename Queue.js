//First In First Out

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue(element) {
    return this.queue.shift(element);
  }
}

const obj = new Queue();
console.log(obj.queue);
obj.enqueue("shofol");
console.log(obj.queue);
obj.enqueue("shanto");
console.log(obj.queue);
obj.enqueue("sohan");
console.log(obj.queue);
obj.dequeue();
console.log(obj.queue);
obj.dequeue();
console.log(obj.queue);
