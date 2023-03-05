/**
 * Код написанный в структурном стиле без использования полиморфизма
 * -----------------------------------------------------------------
 */

/**
 * @param {string} name
 * @param {string} type
 * @constructor
 */
export function Es5Animal(name, type) {
    this.name = name
    this.type = type
}