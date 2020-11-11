const BillingCycle = require('../models/billingCycle')
const sendErrors = require('./billingErrorsService')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

//tratative errors
BillingCycle.after('post', sendErrors).after('put', sendErrors)

BillingCycle.route('count', (request, response) => {
  BillingCycle.count((error, value) => {
    if (error) {
      response.status(500).json({ error })
    }
    else {
      response.json({ value })
    }
  })
})

module.exports = BillingCycle