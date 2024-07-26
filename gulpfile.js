const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass'));
});

// defaultタスクを定義
gulp.task('default', gulp.series('sass', 'watch'));
