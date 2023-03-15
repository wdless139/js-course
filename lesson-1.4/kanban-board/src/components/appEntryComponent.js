import Component from "./component";
import TasksContainerComponent from "./tasksContainerComponent";
import TasksInfo from "../model/tasksInfo";
import DemoCreateTaskComponent from "./demoCreateTaskComponent";

/**
 * Главный компонент приложения, точка входа
 */
class AppEntryComponent extends Component {
    render() {
        const tasksInfo = new TasksInfo()

        const demoCreateTaskWrapper = document.createElement('div')
        demoCreateTaskWrapper.className = 'demo_create_task__wrapper'

        const tasksContainerWrapper = document.createElement('div')
        tasksContainerWrapper.className = 'tasks_container__wrapper'

        /**
         * Для каждого дочернего компонента создается элемент обертка для того, чтобы дочерние компоненты
         * не отчищали соседей вызовом this.elem.innerHTML = '', а чистили только свое обертку
         */
        this.elem.appendChild(demoCreateTaskWrapper)
        this.elem.appendChild(tasksContainerWrapper)

        const demoCreateTask = new DemoCreateTaskComponent(demoCreateTaskWrapper, {}, tasksInfo)
        const tasksContainer = new TasksContainerComponent(tasksContainerWrapper, {}, tasksInfo)

        /**
         * Добавляет tasksContainer как слушатель события emitRender для demoCreateTask
         * @see observableComponent
         */
        demoCreateTask.addListener(tasksContainer)

        demoCreateTask.render()
        tasksContainer.render()
    }
}

export default AppEntryComponent