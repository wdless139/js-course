import Component from "./component";
import TasksContainerComponent from "./tasksContainerComponent";
import TasksInfo from "../model/tasksInfo";

/**
 * Главный компонент приложения, точка входа
 */
class AppEntryComponent extends Component {
    render() {
        const tasksInfo = new TasksInfo()

        /**
         * Создается новый объект TasksContainerComponent, ему передается elem в который этот компонент будет
         * встраивать HTML
         * Затем, у компонента вызывается метод render для его отрисовки
         */
        new TasksContainerComponent(this.elem, {}, tasksInfo).render()
    }
}

export default AppEntryComponent