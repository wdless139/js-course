'use strict'

const document = {
    number: 1234
};

function User(name, year, document) {
    let thisYear = 2023;

    return {
        name: name,
        age: thisYear - year,
        document: document?.number
    }
}

let user = new User('Denis', 2000, document);
console.log(user);