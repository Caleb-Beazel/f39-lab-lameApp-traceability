const express = require('express')
const app = express()

app.use(express.json())

console.log(__dirname)

app.use(express.static(`${__dirname}`))

app.listen(6556, () => console.log('Server up and running govenor. On port 6556.'))