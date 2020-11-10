const { Router } = require('express')
const billingCycleService = require('../api/services/billingCycleService')
const { getSummary } = require('../api/services/billingSummaryService')

const billingRouter = Router();

billingCycleService.register(billingRouter, '/billingCycles')

billingRouter.get('/billingSummary', getSummary)

module.exports = billingRouter