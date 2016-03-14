const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./api/api-router')

const dir = process.argv[2]
const port = 8080
const app = express()

app.use(express.static(dir))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', apiRouter)

app.listen(port)

console.log('\n Serving directory /' + dir + ' on port ' + port)
