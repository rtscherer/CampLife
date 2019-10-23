/*jshint esversion: 6 */

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename');

gulp.task('hello', function() {
  console.log('Hello!');
});

gulp.task('minify-css', function () {
  return gulp.src(['public/countdown/css/**.css',
                   '!public/countdown/css/**min.css'])
             .pipe(cleanCSS({debug: true}, (details) => {
                console.log(`${details.name}: ${details.stats.originalSize}`);
                console.log(`${details.name} (minified): ${details.stats.minifiedSize}`);
              }))
              .pipe(rename({
                  suffix: '.min'
              }))
             .pipe(gulp.dest('_stage'));
});
