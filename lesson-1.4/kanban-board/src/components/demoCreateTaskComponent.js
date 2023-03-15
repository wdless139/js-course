import Component from "./component";
import {observableComponent} from "../core/observableComponent";
import Task from "../model/task";

export default class DemoCreateTaskComponent extends Component {
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
        const button = document.createElement('button')
        button.innerText = 'Create Demo Task'

        button.addEventListener('click', () => {
            this._tasksInfo
                ._tasks
                .push(new Task(
                    /** Создание задачи с рандомным id */
                    Math.floor(Math.random() * 99),
                    'Demo Task'
                ))

            /**
             * Сообщает о том, что все слушатели текущего класса должны быть снова перерендерены
             * @see observableComponent
             */
            this.emitRender()
        })

        this.elem.appendChild(button)
    }
}