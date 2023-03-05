import {Es5Animal} from "./es5Animals.js"
import {Animal, Cat, Cock, Dog} from "./animals.js"

export function nonPolyExample() {
    /**
     * @type {Es5Animal[]}
     */
    const animals = [
        new Es5Animal('biba', 'dog'),
        new Es5Animal('boba', 'cat'),
        new Es5Animal('pupa', 'cock'),
    ]

    for (const animal of animals) {
        if (animal.type === 'dog') {
            console.log(animal.name + ' говорит bark!')
        } else if (animal.type === 'cat') {
            console.log(animal.name + ' говорит meow!')
        } else if (animal.type === 'cock') {
            console.log(animal.name + ' говорит co co')
        }
    }
}

export function polyExample() {
    /**
     * @type {Animal[]}
     */
    const animals = [
        new Cat('boba'),
        new Cock('pupa'),
        new Dog('biba'),
    ]

    for (const animal of animals) {
        animal.say()
    }
}