//Last In Fast  Out - LIFO
class Stack {
  constructor() {
    this.stack = [];
  }
  Add(element) {
    this.stack.push(element);
  }
  remove(element) {
    return this.stack.pop(element);
  }
}

const stacks = new Stack();
console.log(stacks.stack);
stacks.Add("shofol");
console.log(stacks.stack);
stacks.Add("shanto");
console.log(stacks.stack);
stacks.Add("Sohan");
console.log(stacks.stack);
stacks.remove();
console.log(stacks.stack);
stacks.remove();
console.log(stacks.stack);
