const express = require('express')
const routes = require('./routes/index')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log(`server started on port ${port}`)
})

module.exports = app