'use strict'

const thisYear = 2023;
const document = {
    number: 1234
};

function User(name, year, document) {
    return {
        name: name,
        age: thisYear - year,
        document: document
    }
}

let user = new User('Denis', 2000, document);
let user2 = new User('Tanus', 2002, { number: 4321 });
let user3 = new User('HZ', 1999);
console.log(user.document?.number);
console.log(user2.document?.number);
console.log(user3.document?.number);