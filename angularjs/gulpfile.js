const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app.js')
require('./gulpTasks/dep.js')
require('./gulpTasks/server.js')

gulp.task('default', () => {
  if (util.env.production) {
    sequence('dep', 'app')
  } else {
    sequence('dep', 'app', 'server')
  }
})