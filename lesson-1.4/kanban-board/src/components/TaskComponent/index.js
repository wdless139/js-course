import AbstractComponent from "../AbstractComponent";

/**
 * Компонент для отрисовки одной таски
 */
class TaskComponent extends AbstractComponent {
    render() {
        const task = document.createElement('li')
        task.className = 'task'
        task.innerHTML = `
            <p>${this.props.name}</p>
            <p class="delete" style="color: firebrick">удалить</p>
            `

        /**
         * Регистрации функции которая была переданна из компонента TasksContainerComponent на клик по <p class="delete"...
         */
        task.querySelector('.delete')
            .addEventListener('click', this.props.onClick)

        this.elem.appendChild(task)
    }
}

export default TaskComponent