const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// compile scss into css
function style() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./dist/styles'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
  gulp.watch('./src/styles/**/*.scss', style);
  gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;