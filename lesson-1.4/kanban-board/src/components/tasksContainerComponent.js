import Component from "./component";
import TaskComponent from "./taskComponent";
import TasksInfo from "../model/tasksInfo";
import taskComponent from "./taskComponent";

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
        const container = document.createElement('div');
        const todo = document.createElement('div');
        const done = document.createElement('div');

        todo.className = 'tasks_todo';
        done.className = 'tasks_done';
        container.className = 'tasks_container';

        container.appendChild(todo);
        container.appendChild(done);

        done.innerHTML = '<ul></ul>';
        todo.innerHTML = '<ul></ul>';

        const ulTodo = todo.querySelector('ul');
        const ulDone = done.querySelector('ul');

        for (const task of this._tasksInfo.getTasks()) {
            /**
             * Создание и отрисовка нового компонента TaskComponent
             * В качестве родительского элемента компонента передает созданный элемент ul
             */
            if (task.isTodo()) {
                new TaskComponent(ulTodo, {
                    name: task.name,

                    onClick: () => {
                        this._tasksInfo.removeTask(task.id)
                        this.render()
                    }
                }) .render();
            } else if (task.isDone()) {
                new TaskComponent(ulDone, {
                    name: task.name,

                    onClick: () => {
                        this._tasksInfo.removeTask(task.id)
                        this.render()
                    }
                }) .render();
            }
        }

        /** Отчищает родительский элемент от HTML для того, чтобы обновить его */
        this.elem.innerHTML = ''
        this.elem.appendChild(container)
    }
}

export default TasksContainerComponent