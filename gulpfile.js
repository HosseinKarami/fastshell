var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename');


gulp.task('css', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 15 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(sass({ style: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/css'))
});

gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/js'))
})

gulp.task('browser-sync', function() {
    browserSync.init(["app/assets/css/*.css", "app/**/*.html", "app/assets/js/**/*.js"], {
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('default', ['css', 'js', 'browser-sync'], function () {
    gulp.watch("src/scss/*/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
});