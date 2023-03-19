import Task from "./task";
import task from "./task";

class TasksInfo {
    _tasks = [
        new Task(1, 'Some Task', 'ToDo'),
        new Task(2, 'Mine more ninada😎', 'Done'),
        new Task(3, 'Do something', 'ToDo'),
        new Task(4, 'Finished😎', 'Done'),
        new Task(5, 'Update something', 'ToDo')
    ]

    /**
     * @return {Task[]}
     */
    getTasks() {
        return this._tasks
    }

    /**
     * Удаление задачи по id
     * @param {number} id
     */
    removeTask(id) {
        this._tasks = this._tasks.filter(task => task.id !== id)
    }

    /**
     * Изменение status`а задачи
     * @param {string} status
     * @param {number} id
     */
    changeStatus(status, id) {
        for (let task of this._tasks) {
            if (task.id === id) {
                task.status = status;
            }
        }
    }

    /**
     * @param {Task} task
     */
    addTask(task) {
        this._tasks.push(task);
    }
}

export default TasksInfo