// Last In First Out => LIFO

class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element);
    }
    remove() {
        return this.stack.pop();
    }
}

const plates = new Stack();

console.log(plates.stack);

plates.add('abc');
console.log(plates.stack);

plates.add('def');
console.log(plates.stack);

plates.add('ghi');
console.log(plates.stack);

plates.add('jkl');
console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);