function sendErrors(request, response, next) {
  const bundle = response.locals.bundle

  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    response.status(500).json({ errors })
  }
  else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  for (error in nodeRestfulErrors) {
    errors.push(nodeRestfulErrors[error].message)
  }
  return errors
}

module.exports = sendErrors