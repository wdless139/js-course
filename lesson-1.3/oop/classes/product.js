/**
 * Класс сущность, объекты класса могут представать в различных вариантах
 * Служит для описания чего-либо
 */
export class Product {
    /**
     * @param {string} name
     * @param {number} price
     */
    constructor(name, price) {
        this._name = name
        this._price = price
    }

    /**
     * @returns {string}
     */
    getName() {
        return this._name
    }

    /**
     * @returns {number}
     */
    getPrice() {
        return this._price
    }
}