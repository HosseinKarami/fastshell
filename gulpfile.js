var gulp = require('gulp'),
	concat = require('gulp-concat'),
	gulputil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-ruby-sass'),
	connect = require('connect'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    bower = require('gulp-bower'),
    bowerFiles = require("gulp-bower-files"),
    jshint = require('gulp-jshint'),
    cache = require('gulp-cache'),
    http = require('http'),
    open = require('open'),
    refresh = require('gulp-livereload'),
    tinylr = require('tiny-lr'),
    livereload = tinylr(),
    config = {
        app: 'app',
        dist: 'src',
        port: 9000,
        scripts: function () {
            return this.app + '/assets/js';
        },
        styles: function () {
            return this.app + '/assets/css';
        },
        images: function () {
            return this.app + '/assets/img';
        },
        html: function () {
            return this.app + '/*.html';
        },
        lr: 35729
    };



gulp.task('css',function(){
    return gulp.src('src/scss/style.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 15 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(sass({ style: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/css'))
	.pipe(refresh(livereload));
})


gulp.task('js',function(){
	gulp.src('src/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
	.pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(refresh(livereload));
})


gulp.task('bower', function() {
  bower('./my_bower_components')
    .pipe(gulp.dest('lib/'))
});

gulp.task("bowerFiles", function(){
    bowerFiles()
    .pipe(gulp.dest("app/assets/components"));
});

gulp.task('images', function() {
 return gulp.src('src/img/**')
    // Pass in options to the task
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(refresh(livereload))
    .pipe(gulp.dest('app/assets/img'))
});

gulp.task('connect-livereload', function(){
    var middleware = [
        require('connect-livereload')({ port: config.lr }),
        connect.static(config.app),
        connect.directory(config.app)
    ];
 
    var app = connect.apply(null, middleware);
 
    var server = http.createServer(app);
 
    server
        .listen(config.port)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:' + config.port + '.');
 
            open('http://localhost:' + config.port);
        });
});
 
gulp.task('tinylr', function(){
    livereload.listen(config.lr, function(err){
        if (err) {
            return console.log(err);
        }
    });
});
// Rerun the task when a file changes
gulp.task('build', function () {
  gulp.run('css', 'js');
});

gulp.task('server', ['css', 'js', 'images', 'bower', 'bowerFiles', 'connect-livereload', 'tinylr'], function(){
    var htmlPath = config.html();
 
    gulp.watch(['src/scss/*/*.scss'], function(event){
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
 
        gulp.run('css');
    });
 
    gulp.watch(['src/js/*.js'], function(event){
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
 
        gulp.run('js');
    });
 
    gulp.watch(['src/img/**'], function(event){
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
 
        gulp.run('images');
    });

    gulp.watch([htmlPath], function(event){
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
 
        gulp.src(htmlPath)
            .pipe(refresh(livereload));
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['server']);





