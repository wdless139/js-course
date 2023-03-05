'use strict';

const example = {
    a: 1,
    b: 'str',

    isIdentical: function (other) {
        for (const key in this) {
            if (key === 'isIdentical') {
                continue;
            }

            if (!(key in other) || other[key] !== this[key]) {
                return false;
            }
        }

        return true;
    }
}

const other = {
    a: 1,
    b: 'str'
}

// console.log(example.isIdentical(other));

const collection = {
    length: 0,
    currentIndex: 0,

    add: function (element) {
        this[this.currentIndex] = element;
        this.currentIndex++;
        this.length++;
    },

    get: function (index) {
        return this[index];
    },

    getLength: function () {
        return this.length;
    }
}

collection.add('Hello');
collection.add('World')
collection.add('!');

// console.log(collection.get(1)) // World
// console.log(collection.getLength()) // 3

const immutableObject = {
    prev: null,

    put(key, value) {
        const clone = Object.assign({}, this);
        clone[key] = value;
        clone.prev = this;

        return clone;
    }
}

console.log(immutableObject);

let resultObject = immutableObject.put('a', 'first value');
console.log(resultObject); // { a: 'first value', put..., prev...}

resultObject = resultObject.put('b', 'second value');
console.log(resultObject); // { a: 'first value', b: 'second value', put..., prev...}

resultObject = resultObject.put('c', 'third value'); // { a: 'first value', b: 'second value', c: 'third value', put..., prev...}
console.log(resultObject);

console.log(resultObject === immutableObject); // false
console.log(resultObject.prev.prev.prev === immutableObject); // true