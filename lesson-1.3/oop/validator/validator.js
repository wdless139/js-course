import {ValidationRule} from "./validationRules.js";

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}

export class Validator {
    /**
     * @param {any} property
     * @param {ValidationRule[]} rules
     * @return boolean
     */
    static validate(property, rules) {
        for (const rule of rules) {
            if (!rule.isValid(property)) {
                return false
            }
        }

        return true
    }

    /**
     * @param {any} property
     * @param {ValidationRule[]} rules
     */
    static validateAndThrowError(property, rules) {
        for (const rule of rules) {
            if (!rule.isValid(property)) {
                throw new ValidationError('Ошибка валидации - ' + rule.constructor.name)
            }
        }
    }
}