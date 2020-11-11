const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps')

gulp.task('deps.js', () => {
  return gulp.src('public/assets/js/deps.js')
    .pipe(uglify())
    .pipe(concat('deps.min.js'))
    .pipe(gulp.dest('public/assets/js/'))
})

gulp.task('deps.css', () => {
  return gulp.src('public/assets/css/deps.css')
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('public/assets/css/'))
})
gulp.task('deps.fonts', () => {
  return gulp.src([
    'node_modules/font-awesome/fonts/*.*',
    'node_modules/admin-lte/bootstrap/fonts/*.*'
  ])
    .pipe(gulp.dest('public/assets/fonts/'))
})