var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassGlob = require('gulp-sass-glob');

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass({
  errLogToConsole:true,
  outputStyle: 'expanded'
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
});

gulp.task('watch',['sass'],function () {
  gulp.watch('sass/**/*.scss',['sass']);
})
