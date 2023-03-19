import Component from "./component";

/**
 * Компонент для отрисовки одной задачи
 */
class TaskComponent extends Component {
    render() {
        const task = document.createElement('li')
        task.className = 'task'
        task.innerHTML = `
            <p>${this.props.name}</p>
            <p class="delete" style="color: firebrick">удалить</p>
            <select class="status">
                <option class="status_todo" style="color: lightgreen" ${this.props.status === 'ToDo' ? 'selected' : ''}>ToDo</option>
                <option class="status_done" style="color: firebrick" ${this.props.status === 'Done' ? 'selected' : ''}>Done</option>
            </select>
            `

        /**
         * Регистрации функции которая была переданна из компонента TasksContainerComponent на клик по <p class="delete"...
         */
        task.querySelector('.delete')
            .addEventListener('click', this.props.onDelete)

        task.querySelector('.status')
            .addEventListener('change', this.props.onChangeStatus)

        this.elem.appendChild(task)
    }
}

export default TaskComponent