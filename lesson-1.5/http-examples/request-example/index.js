const express = require('express')

const app = express()
const port = 3000

app.use(express.static('./public'))

app.get('/api/message', (req, res) => {
    res.status(200)
    res.json({
        message: 'Message from backend!'
    })
})

app.listen(port, () => {
    console.log(`Example app running at http://localhost:${port}`)
})