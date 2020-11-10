const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost/db_finance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = connection