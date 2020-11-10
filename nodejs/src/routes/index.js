const { Router } = require('express')
const loadersRouter = require('./loaders.routes')

const routes = Router()

routes.use('/api', loadersRouter)

module.exports = routes