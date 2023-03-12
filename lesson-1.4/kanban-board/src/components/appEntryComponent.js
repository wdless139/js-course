import Component from "./component";
import TasksContainerComponent from "./tasksContainerComponent";

/**
 * Главный компонент приложения, точка входа
 */
class AppEntryComponent extends Component {
    render() {
        /**
         * Создается новый объект TasksContainerComponent, ему передается elem в который этот компонент будет
         * встраивать HTML
         * Затем, у компонента вызывается метод render для его отрисовки
         */
        new TasksContainerComponent(this.elem, {}).render()
    }
}

export default AppEntryComponent