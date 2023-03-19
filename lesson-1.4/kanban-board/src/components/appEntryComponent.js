import Component from "./component";
import TasksContainerComponent from "./tasksContainerComponent";
import TasksInfo from "../model/tasksInfo";
import AddTaskForm from "./CreateTaskForm";

/**
 * Главный компонент приложения, точка входа
 */
class AppEntryComponent extends Component {
    render() {
        const tasksInfo = new TasksInfo()

        const createTaskWrapper = document.createElement('div')
        createTaskWrapper.className = 'create_task__wrapper'

        const tasksContainerWrapper = document.createElement('div')
        tasksContainerWrapper.className = 'tasks_container__wrapper'

        /**
         * Для каждого дочернего компонента создается элемент обертка для того, чтобы дочерние компоненты
         * не отчищали соседей вызовом this.elem.innerHTML = '', а чистили только свое обертку
         */
        this.elem.appendChild(createTaskWrapper)
        this.elem.appendChild(tasksContainerWrapper)

        const createTask = new AddTaskForm(createTaskWrapper, {}, tasksInfo)
        const tasksContainer = new TasksContainerComponent(tasksContainerWrapper, {}, tasksInfo)

        /**
         * Добавляет tasksContainer как слушатель события emitRender для demoCreateTask
         * @see observableComponent
         */
        createTask.addListener(tasksContainer)

        createTask.render()
        tasksContainer.render()
    }
}

export default AppEntryComponent