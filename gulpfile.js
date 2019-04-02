var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('minify-css', function () {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('compress', function () {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('default', gulp.parallel('browserSync', 'minify-css', function() {
    gulp.watch('app/css/*.css', gulp.series('minify-css'));
    gulp.watch('app/js/*.js', gulp.series('compress'));
}));