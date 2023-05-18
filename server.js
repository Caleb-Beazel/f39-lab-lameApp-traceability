const express = require('express')
const app = express()

app.use(express.json())

console.log(__dirname)

app.use(express.static(`${__dirname}`))


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1b94a65f4756404db0747457d9e72432',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.listen(6556, () => console.log('Server up and running govenor. On port 6556.'))