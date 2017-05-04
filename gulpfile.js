var gulp = require('gulp');
// Plugins
var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    bs = require('browser-sync').create(),
    connect = require('gulp-connect-php'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify');
// Tasks
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(babel({
          presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});
//Convert ES6 ode in all js files in src/js folder and copy to 
//build folder as bundle.js
gulp.task("build", function(){
    return browserify({
      entries: ["./src/js/*.js"]
    })
    .transform(babelify)
    .bundle()
    .pipe(source("all.js"))
    .pipe(gulp.dest("./js"));
});
gulp.task('connect-sync', function() {
    connect.server({}, function (){
        browserSync({
          proxy: '127.0.0.1:8000'
        });
    });
});
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({ stream: true }))
});
gulp.task('browser-sync', ['sass'], function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  })
});
//Default task. This will be run when no task is passed in arguments to gulp
gulp.task('default', ['build']);
// Watch
gulp.task('watch', ['browser-sync'], function() {
gulp.watch('src/scss/**/*.scss', ['sass']);
gulp.watch('src/js/**/*.js', ['scripts']);
gulp.watch('*.html').on('change', bs.reload);
});