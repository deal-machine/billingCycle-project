const { Router } = require('express')
const billingRouter = require('./billing.routes')

const routes = Router()

routes.use('/api', billingRouter)

module.exports = routes