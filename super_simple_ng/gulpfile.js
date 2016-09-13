var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
    rootMod: './app/app.js',
    rootComp: './app/app.component.js',
    modules: './app/index.js',
    controllers: './app/*.controller.js',
    components: './app/*.component.js',
    output: './dist/scripts'
};

var scriptsPaths = [paths.rootMod, paths.rootComp, paths.modules, paths.controllers, paths.components];

gulp.task('scripts', function() {
    return gulp.src(scriptsPaths)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(paths.output));
});

gulp.task('watch', function() {
    gulp.watch(scriptsPaths, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);