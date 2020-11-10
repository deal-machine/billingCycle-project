const { Router } = require('express')
const billingCycleService = require('../api/billingCycleService')

const loadersRouter = Router();

billingCycleService.register(loadersRouter, '/billingCycles')


module.exports = loadersRouter