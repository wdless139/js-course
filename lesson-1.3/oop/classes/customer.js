/**
 * Класс сущность, объекты класса могут представать в различных вариантах
 * Служит для описания чего-либо
 */
export class Customer {
    /**
     * @param {string} username
     * @param {number} discount
     */
    constructor(username, discount) {
        this._username = username
        this._personalDiscount = discount
    }

    /**
     * @returns {string}
     */
    getUsername() {
        return this._username
    }

    /**
     * @returns {number}
     */
    getPersonalDiscount() {
        return this._personalDiscount
    }
}