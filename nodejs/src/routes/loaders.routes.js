const { Router } = require('express')

const loadersRouter = Router();

loadersRouter.use((request, response) => {
  response.json({ message: "ok" })
})

module.exports = loadersRouter