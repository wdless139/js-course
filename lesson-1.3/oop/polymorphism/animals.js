/**
 * Код написанный в ООП стиле с использованием полиморфизма
 * -----------------------------------------------------------------
 */

/**
 * Определение интерфейса, все классы унаследованные у Animal будут иметь метод say
 */
export class Animal {
    /**
     * @param {string} name
     */
    constructor(name) {
        this._name = name
    }

    say() {}

    /**
     * @param {string} words
     */
    _doSay(words) {
        console.log(`${this._name} говорит ${words}`)
    }
}

export class Dog extends Animal {
    say() {
        this._doSay('bark!')
    }
}

export class Cat extends Animal {
    say() {
        this._doSay('meow!')
    }
}

export class Cock extends Animal {
    say() {
        this._doSay('выпал пятизвездочный!')
    }
}