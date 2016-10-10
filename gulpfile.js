var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
  gulp.src('src/**/*.css')
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(concat('facile.min.css'))
    .pipe(gulp.dest('dist'))
});