import {Customer} from "./customer.js"
import {Product} from "./product.js"
import {OrderInfo} from "./orderInfo.js"

export function ordersExample() {
    const customer = new Customer('Meow', 15)

    const cart = [
        new Product('Пипяу', 2000),
        new Product('Жаб', 400),
        new Product('Скетчбук', 250)
    ]

    OrderInfo.displayTotal(cart, customer)
}