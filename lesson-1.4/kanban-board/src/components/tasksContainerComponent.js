import Component from "./component";
import TaskComponent from "./taskComponent";

/**
 * Контейнер для задач, служит для работы с бизнес логикой задач
 */
class TasksContainerComponent extends Component {
    /**
     * @param {HTMLElement} elem
     * @param {Object} props
     * @param {TasksInfo} tasksInfo
     */
    constructor(elem, props, tasksInfo) {
        super(elem, props)

        this._tasksInfo = tasksInfo
    }

    /**
     * Метод получает список задач и для каждой создает компонент TaskComponent, а затем отрисовывает его
     */
    render() {
        const container = document.createElement('div')
        container.className = 'tasks_container'
        container.innerHTML = '<ul></ul>'

        const ul = container.querySelector('ul')

        for (const task of this._tasksInfo.getTasks()) {
            /**
             * Создание и отрисовка нового компонента TaskComponent
             * В качестве родительского элемента компонента передает созданный элемент ul
             */
            new TaskComponent(ul, {
                /** В качестве имени передает имя задачи из текущей итерации */
                name: task.name,
                /**
                 * Передает функцию которая была замкнута с id задачи из текущей итерации
                 * При вызове функции из onClick вызовется функция removeTask из TasksInfo
                 * которой в качестве аргумента передастся замкнутый id задачи,
                 * затем, снова вызовиться метод render текущего компонента для обновления списка задач
                 */
                onClick: () => {
                    this._tasksInfo.removeTask(task.id)
                    this.render()
                }
            })
                .render()
        }

        /** Отчищает родительский элемент от HTML для того, чтобы обновить его */
        this.elem.innerHTML = ''
        this.elem.appendChild(container)
    }
}

export default TasksContainerComponent