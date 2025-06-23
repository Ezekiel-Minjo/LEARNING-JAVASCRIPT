const myIterator2 = {
    current: 1,
    last: 3,
    next() {
        if (this.current <= this.last) {
            return { value: this.current++, done: false };
        } else {
            return { done: true}
        }
    },
    
    [Symbol.iterator]() {
        return this;
    }
};

const values = [...myIterator2];
console.log(`Spread got: `, values)