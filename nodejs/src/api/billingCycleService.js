const BillingCycle = require('./models/billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle