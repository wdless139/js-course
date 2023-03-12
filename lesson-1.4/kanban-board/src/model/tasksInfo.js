import Task from "./task";

class TasksInfo {
    _tasks = [
        new Task(1, 'Some Task'),
        new Task(2, 'Do something'),
        new Task(3, 'Update something')
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
}

export default TasksInfo