/**
 * Класс - сервис, не имеет состояния, может не иметь экземпляра объекта как в данном примере
 * Служит для работы с сущностями или объединения общей функциональности под одним именем
 * Прим. класс для работы с заказом, имеет только методы для работы с заказом
 */
export class OrderInfo {
    /**
     * @param {Array<Product>} products
     * @param {Customer} customer
     * @returns {number}
     */
    static calculateTotal(products, customer) {
        const total = products.reduce((sum, current) => sum + current.getPrice(), 0)
        const discount = customer.getPersonalDiscount() * 0.01

        return total - (total * discount)
    }

    /**
     * @param {Array<Product>} products
     * @param {Customer} customer
     */
    static displayTotal(products, customer) {
        console.log(`Корзина пользователя - ${customer.getUsername()}:`)

        for (const product of products) {
            console.log(`${product.getName()} - ${product.getPrice()} руб`)
        }

        console.log(`\nПерсональная скидка ${customer.getPersonalDiscount()} %`)

        const total = this.calculateTotal(products, customer)

        console.log(`Итог - ${total} руб`)
    }
}