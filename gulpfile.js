'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('browser-sync', function(done) {
    browserSync.init({
        proxy: 'artem.web',
        notify: false // отключаем уведомления
    });
    done();
});

gulp.task('style', function() { // создаем таск sass
    return gulp.src('sass/style.scss') // берем источник
        .pipe(sass()) // преобразуем sass в css посредством gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('style:watch', function() {
    gulp.watch('sass/style.scss', gulp.series('style'));
});

gulp.task('php', function() {
    gulp.watch('**/*.php', browserSync.reload);
});

gulp.task(
    'watch',
    gulp.series(
        'browser-sync', 
        gulp.parallel(
            'style',
            'style:watch',
            'php'
        )
    )
);