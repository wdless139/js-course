/**
 * Определяет интерфейс правила валидации
 */
class ValidationRule {
    /**
     * Метод принимает свойство (любое значение), метод должен вернуть true если свойство валидно, иначе false
     *
     * @param {any} property
     */
    isValid(property) {}
}

class NotEmptyRule extends ValidationRule {
    isValid(property) {
        return property !== '';
    }
}

class NotInRule extends ValidationRule {
    /**
     * @param {Array<any>} arr
     */
    constructor(arr) {
        super();
        this._arr = arr
    }

    isValid(property) {
        return !this._arr.includes(property)
    }
}

class MinRule extends ValidationRule {
    /**
     * @param {number} min
     */
    constructor(min) {
        super();
        this._min = min
    }

    isValid(property) {
        return property.length >= this._min
    }
}

export {
    ValidationRule,
    NotEmptyRule,
    NotInRule,
    MinRule
}