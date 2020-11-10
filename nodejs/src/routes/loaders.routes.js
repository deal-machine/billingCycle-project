const { Router } = require('express')
const billingCycleService = require('../api/services/billingCycleService')
const { getSummary } = require('../api/services/billingSummaryService')

const loadersRouter = Router();

billingCycleService.register(loadersRouter, '/billingCycles')

loadersRouter.get('/billingSummary', getSummary)

module.exports = loadersRouter