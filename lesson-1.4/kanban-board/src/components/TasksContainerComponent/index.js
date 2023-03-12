import AbstractComponent from "../AbstractComponent";
import TaskComponent from "../TaskComponent";

/**
 * Контейнер для задач, служит для работы с бизнес логикой задач
 */
class TasksContainerComponent extends AbstractComponent {
    _tasks = [
        'Hello World',
        'My Task',
        'Do Something',
        'Я не знаю'
    ]

    /**
     * Метод получает список задач и для каждой создает компонент TaskComponent, а затем отрисовывает его
     */
    render() {
        const container = document.createElement('div')
        container.className = 'tasks_container'
        container.innerHTML = '<ul></ul>'

        const ul = container.querySelector('ul')

        for (const task of this._tasks) {
            /**
             * Создание и отрисовка нового компонента TaskComponent
             * В качестве родительского элемента компонента передает созданный элемент ul
             */
            new TaskComponent(ul, {
                /** В качестве имени таски передает таску из текущей итерации */
                name: task,
                /**
                 * Передает функцию которая была замкнута с таской из текущей итерации
                 * При вызове функции из onClick вызовется функция deleteTask из текущего класса
                 * которой в качестве аргумента передастся замкнутая таска
                 */
                onClick: () => this.deleteTask(task)
            })
                .render()
        }

        /** Отчищает родительский элемент от HTML для того, чтобы обновить его */
        this.elem.innerHTML = ''
        this.elem.appendChild(container)
    }

    /** Удаляет таску по имени */
    deleteTask(name) {
        this._tasks = this._tasks.filter(value => value !== name)

        /** Заного рисует список задач после удаления */
        this.render()
    }
}

export default TasksContainerComponent