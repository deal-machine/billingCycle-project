const { Router } = require('express')
const loadersRouter = require('./loaders.routes')

const routes = Router()

routes.use('/', loadersRouter)

module.exports = routes