'use strict';

class Profile {
    _email = null;
    _password = null;

    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
}

const blackList = [
    'pupa@mail.com',
    'lupa@mail.com',
];

const profiles = [
    new Profile('pipyau@mail.com', '123456')
];