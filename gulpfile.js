var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-ruby-sass'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    base64 = require('gulp-base64'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

// 插件安装
// npm install gulp browser-sync del gulp-notify gulp-concat gulp-rename gulp-sourcemaps gulp-ruby-sass gulp-clean-css gulp-autoprefixer gulp-imagemin gulp-base64 gulp-uglify gulp-jshint --save-dev


// Del
gulp.task('del', function () {
    del(['dist/*']);
});

// Html
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'html task complete' }))
        .pipe(browserSync.reload({stream: true}));
});

// Style
gulp.task('style', function() {
   return sass(['src/sass/index.scss'], { sourcemap: true})
       .pipe(autoprefixer({
           browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
       }))
       .pipe(base64({ maxImageSize: 2*1024, exclude: ['sns_wb.png']}))
       .pipe(concat('all.css'))
       .pipe(cleancss())
       .pipe(rename({suffix: '.min'}))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('dist/css'))
       .pipe(notify({ message: 'styles task complete' }))
       .pipe(browserSync.reload({stream: true}));
});

// Script
gulp.task('script', function () {
    return gulp.src(['src/js/**/a.js', 'src/js/**/b.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'script task complete' }))
        .pipe(browserSync.reload({stream: true}));
});

// Image
gulp.task('image', function() {
    gulp.src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({ message: 'image task complete' }))
        .pipe(browserSync.reload({stream: true}));
});

// 同步刷新
gulp.task('sync', ['html', 'style', 'script', 'image'], function() {
    browserSync.init({
        server: 'dist' // 本地环境
        //proxy: 'http://localhost' // 代理服务器
    });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/sass/*.scss', ['style']);
    gulp.watch('src/js/*.js', ['script']);
    gulp.watch('src/img/*', ['image']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['del', 'html', 'style', 'script', 'image', 'sync']);
