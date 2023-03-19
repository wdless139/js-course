import Component from "./component";
import TaskComponent from "./taskComponent";
import axios from "axios";

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

        /** Получение списка задач по Http */
        axios.get('/api/tasks')
            .then(response => {
                for (const task of response.data) {
                    this.renderTask(task)
                }
            })

        /** Отчищает родительский элемент от HTML для того, чтобы обновить его */
        this.elem.innerHTML = ''
        this.elem.appendChild(container)
    }

    renderTask(task) {
        const ulTodo = document.querySelector('.tasks_todo ul');
        const ulDone = document.querySelector('.tasks_done ul');

        let parentUl = null

        if (task.status === 'ToDo') {
            parentUl = ulTodo
        } else if (task.status === 'Done') {
            parentUl = ulDone
        }

        new TaskComponent(parentUl, {
            name: task.name,
            status: task.status,

            /** Изменение статуса задачи по Http */
            onChangeStatus: (event) => {
                axios.patch(`/api/task/${task.id}`, { status: event.currentTarget.value })
                    .then(response => {
                        this.render()
                    })
            },

            onDelete: () => {
                // this._tasksInfo.removeTask(task.id)
                // this.render()

                /**
                 * Использовать DELETE /api/task/:id
                 */
            }
        })
            .render();
    }
}

export default TasksContainerComponent