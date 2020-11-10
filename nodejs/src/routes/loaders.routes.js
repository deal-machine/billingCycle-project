const { Router } = require('express')

const loadersRouter = Router();

loadersRouter.use(() => {
  console.log('here i am')
})

module.exports = loadersRouter