const express = require('express')
const app = express()

app.use(express.json())

app.listen(6556, () => console.log('Server up and running govenor. On port 6556.'))