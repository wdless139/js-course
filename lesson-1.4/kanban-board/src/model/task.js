class Task {
    /**
     * @param {number} id
     * @param {string} name
     * @param {string} status
     */
    constructor(id, name, status) {
        this.id = id
        this.name = name
        this.status = status
    }

    isTodo() {
        return this.status === 'ToDo';
    }

    isDone() {
        return this.status === 'Done';
    }
}

export default Task