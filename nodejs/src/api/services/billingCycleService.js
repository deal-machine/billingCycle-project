const BillingCycle = require('../models/billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (request, response) => {
  BillingCycle.count((error, value) => {
    if (error) {
      response.status(500).json({ error: error.message })
    }
    else {
      response.json({ value })
    }
  })
})

module.exports = BillingCycle