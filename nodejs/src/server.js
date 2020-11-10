const express = require('express')
const routes = require('./routes')
const { urlencoded } = require('body-parser')

require('./config/database')

const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
