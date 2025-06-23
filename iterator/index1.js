const myIterator = {
    current: 1,
    last: 3,
    next() {
        if (this.current <= this.last) {
            return {value: this.current++, done: false};
        } else {
            return { done: true};
        }
    },
     [Symbol.iterator]() {
        return this;
     }
};

for (let num of myIterator) {
    console.log(`for...of got: ${num}`);
}
// Symbol.iterator makes this object iterable with for...of and ...