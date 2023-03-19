const express = require('express')

const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hey',
        message: 'Hello World!'
    })
})

app.get('/greet/:name', (req, res) => {
    res.render('greet', {
        title: 'Greeting',
        message: `Greeting, ${req.params.name}`
    })
})

app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port}`)
})