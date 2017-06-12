/**
 * Created by kalpana on 03/06/17.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var watchify = require("watchify");
var argv = require('yargs').argv;
var paths = {
    pages: [argv.site + '/src/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest(argv.site + '/dist'));
});

gulp.task('build', ['copyHtml'], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [argv.site + '/src/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(argv.site + '/dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(argv.site + '/src/*.ts', ['build']);
});

gulp.task('default', ['watch']);