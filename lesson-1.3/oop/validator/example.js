import {MinRule, NotEmptyRule, NotInRule} from "./validationRules.js"
import {Validator} from "./validator.js"

class Profile {
    /**
     * @param {string} email
     * @param {string} password
     */
    constructor(email, password) {
        this._email = email
        this._password = password
    }

    getEmail() {
        return this._email;
    }

    getPassword() {
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

export function validateProfileExample(email, password) {
    const emailRules = [
        new NotEmptyRule(),
        new NotInRule(blackList),
        new NotInRule(profiles.map(profile => profile.getEmail()))
    ]

    const passwordRules = [
        new NotEmptyRule(),
        new MinRule(6)
    ]

    console.log('Email валидация - ' + Validator.validate(email, emailRules))
    console.log('Password валидация - ' + Validator.validate(password, passwordRules))

    // Validator.validateAndThrowError(email, emailRules)
    // Validator.validateAndThrowError(passwordRules, passwordRules)
}