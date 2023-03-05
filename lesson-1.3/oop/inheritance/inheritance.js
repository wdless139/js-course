class Square {
    /**
     * @param {number} size
     */
    constructor(size) {
        this.size = size
    }
}

class ColoredSquare extends Square {
    /**
     * @param {number} size
     * @param {string} color
     */
    constructor(size, color) {
        super(size)
        this.color = color
    }
}