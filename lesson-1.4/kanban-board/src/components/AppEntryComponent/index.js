import AbstractComponent from "../AbstractComponent";
import TasksContainerComponent from "../TasksContainerComponent";

/**
 * Главный компонент приложения, точка входа
 */
class AppEntryComponent extends AbstractComponent {
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