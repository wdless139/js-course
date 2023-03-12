/**
 * Базовый класс для всех компонентов, имеет 2 свойства:
 * elem - хранит родительский для компонента HTMLElement
 * props - объект с данными, которые необходимы для отрисовки компонента
 */
class Component {
    /**
     * @param {HTMLElement} elem
     * @param {Object} props
     */
    constructor(elem, props) {
        this.elem = elem
        this.props = props
    }

    /**
     * Метод служит для отрисовки HTML на странице
     */
    render() {}
}

export default Component