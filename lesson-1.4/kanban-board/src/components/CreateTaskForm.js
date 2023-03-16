import tasksInfo from "../model/tasksInfo";
import Component from "./component";
import Task from "../model/task";
import {observableComponent} from "../core/observableComponent";

// function addTaskForm(task) {
//     const app = document.querySelector('#app');
//     const FORM = document.createElement('textarea');
//
//     app.appendChild(FORM);
//
//     const button = document.createElement('button');
//     button.innerText = 'Create Task';
//
//     button.addEventListener('click', {
//
//     })
//
// }

class AddTaskForm extends Component {
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
        const app = document.querySelector('#app');
        const FORM = document.createElement('input');

        FORM.setAttribute('placeholder', 'Name task');
        app.appendChild(FORM);

        const button = document.createElement('button');
        button.innerText = 'Create Task';

        button.addEventListener('click', () => {
            this._tasksInfo.addTask(new Task(
                Math.floor(Math.random() * 99)),
                FORM.value,
                'Done');
            this.emitRender()
        })

        this.elem.appendChild(button)
    }
}