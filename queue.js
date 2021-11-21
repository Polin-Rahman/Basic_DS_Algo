// First In First Out=> FIFO

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        this.queue.shift();
    }
}

const items = new Queue();

items.enqueue('abc');
items.enqueue('def');
items.enqueue('ghi');
items.enqueue('jkl');

console.log(items.queue);

items.dequeue();
console.log(items.queue);

items.dequeue();
console.log(items.queue);