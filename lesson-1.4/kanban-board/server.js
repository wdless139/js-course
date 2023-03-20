const express = require('express')

class Task {
    constructor(id, name, status) {
        this.id = id
        this.name = name
        this.status = status
    }
}

class TasksInfo {
    static _tasks = [
        new Task(
            Math.floor(Math.random() * 1000),
            'Demo Task',
            'ToDo'
        ),
        new Task(
            Math.floor(Math.random() * 1000),
            'Another Task',
            'ToDo'
        ),
        new Task(
            Math.floor(Math.random() * 1000),
            'Done Task',
            'Done'
        )
    ]

    static getTasks() {
        return this._tasks
    }

    static removeTask(id) {
        this._tasks = this._tasks.filter(task => task.id !== id)
    }

    static changeStatus(status, id) {
        this._tasks
            .filter(task => task.id === id)
            .forEach(task => task.status = status)
    }

    static addTask(task) {
        this._tasks.push(task);
    }
}

const app = express()
const port = 3000

app.use(express.static('./public'))
app.use(express.json())

app.get('/api/tasks', (req, res) => {
    const tasks = TasksInfo.getTasks()

    res.json(tasks)
})

app.post('/api/tasks', (req, res) => {
    TasksInfo.addTask(new Task(
        Math.floor(Math.random() * 1000),
        req.body.name,
        req.body.status
    ))

    res.end()
})

app.delete('/api/task/:id', (req, res) => {
    TasksInfo.removeTask(parseInt(req.params.id))

    res.end()
})

app.patch('/api/task/:id', (req, res) => {
    TasksInfo.changeStatus(req.body.status, parseInt(req.params.id))

    res.end()
})

app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port}`)
})