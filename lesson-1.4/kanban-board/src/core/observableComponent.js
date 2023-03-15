export const observableComponent = {
    listeners: [],

    /**
     * @param {Object} listener
     */
    addListener(listener) {
        if (typeof listener.render !== 'function') {
            throw new TypeError(`${listener.name} must implement the render method`)
        }

        this.listeners.push(listener)
    },

    emitRender() {
        for (const listener of this.listeners) {
            listener.render()
        }
    }
}