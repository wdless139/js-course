import Component from "./component";
import {observableComponent} from "../core/observableComponent";

export default class AddTaskForm extends Component {
    /**
     * @param {HTMLElement} elem
     * @param {Object} props
     * @param {TasksInfo} tasksInfo
     */
    constructor(elem, props, tasksInfo) {
        super(elem, props)

        this._tasksInfo = tasksInfo

        /**
         * Добавление примеси observableComponent созданному объекту
         * @see https://learn.javascript.ru/mixins
         */
        Object.assign(this, observableComponent)
    }

    render() {
        const form = document.createElement('input');
        const button = document.createElement('button');
        button.innerText = 'Create Task';

        form.setAttribute('placeholder', 'Name task');

        button.addEventListener('click', () => {
            // this._tasksInfo.addTask(new Task(
            //     Math.floor(Math.random() * 99),
            //     form.value,
            //     'ToDo'))
            //
            // this.emitRender();

            /**
             * @TODO Использовать POST /api/tasks
             * Пример тела запроса: { name: 'Hello Task', status: 'ToDo' }
             */
        })

        this.elem.appendChild(form);
        this.elem.appendChild(button);
    }
}