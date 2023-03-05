/**
 * Когда стоит применять наследование а когда не стоит, ммм?
 * ---------------------------------------------------------
 */

class Validator {
    /**
     * @param {string} username
     * @param {string} password
     * @returns {boolean}
     */
    validate(username, password) {
        //...
        return true
    }
}

/**
 * Плохой пример наследования :(
 */
class BadProfileCreator extends Validator {
    /**
     * @param {string} username
     * @param {string} password
     */
    createProfile(username, password) {
        if (this.validate(username, password)) {
            // Создать профиль
        }
    }
}

/**
 * Хороший пример - композиция
 */
class GoodProfileCreator {
    /**
     * @param {Validator} validator
     */
    constructor(validator) {
        this._validator = validator
    }

    /**
     * @param {string} username
     * @param {string} password
     */
    createProfile(username, password) {
        if (this._validator.validate(username, password)) {
            // Создать профиль
        }
    }
}