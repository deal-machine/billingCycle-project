const { Router } = require('express')
const billingCycleService = require('../api/billingCycleService')

module.exports = function () {
  const loadersRouter = Router();

  billingCycleService.register(loadersRouter, '/billingCycles')
}

